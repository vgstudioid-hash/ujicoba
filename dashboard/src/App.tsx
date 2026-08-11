"use client";

import { useEffect, useMemo, useState } from "react";

type Asset = Record<string, string | number | null> & {
  "Kode Aset": string; "Jenis Aset": string; "Risk Score": number; "Nilai Kondisi": number;
  "Kategori Risiko": string; "Tahun Bangun": number; "Umur Teknis": number; Kritikalitas: number;
  Gangguan: number; "Image Asset URL": string; "Image 3D URL": string; "2D Model URL": string;
};
type Row = Record<string, string | number | null>;
type DashboardData = { main: Asset[]; histori_inspeksi: Row[]; histori_pemeliharaan: Row[]; trend_kondisi: Row[]; trend_RS: Row[]; decision_taken: Row[] };

const pages = [
  ["overview", "Executive Overview", "grid"], ["portfolio", "Asset Portfolio", "portfolio"],
  ["intelligence", "Asset Intelligence", "brain"], ["performance", "Asset Performance", "chart"],
  ["virtual", "Virtual Asset 360", "rotate"], ["system", "Sistem & Parameter", "settings"],
  ["summary", "Assets Summary", "table"],
] as const;

const riskColor: Record<string, string> = { Rendah: "#388E3C", Sedang: "#FBC02D", Tinggi: "#D32F2F", Kritis: "#B51C1C" };
const codes = ["BD-001","BD-002","SW-001","SW-002","PA-001","PA-002","PA-003","PH-001","SI-001","SI-002","SI-003","SI-004","GA-001","GA-002","GA-003","INT-001","INT-002","INT-003","INT-004","INT-005"];

function Icon({ name }: { name: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const paths: Record<string, React.ReactNode> = {
    grid: <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></>,
    portfolio: <><path d="M4 7h16v12H4z"/><path d="M9 7V4h6v3M4 12h16"/></>, brain: <><path d="M9 4a3 3 0 0 0-5 2 3 3 0 0 0 1 5 3 3 0 0 0 3 5v3"/><path d="M15 4a3 3 0 0 1 5 2 3 3 0 0 1-1 5 3 3 0 0 1-3 5v3M9 8h6M12 4v16"/></>,
    chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></>, rotate: <><path d="M20 11a8 8 0 1 0-2 6"/><path d="m20 5v6h-6"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1-2-4-2 1a7 7 0 0 0-2-1V3h-5v3a7 7 0 0 0-2 1L6 6l-2 4 2 1a7 7 0 0 0 0 2l-2 1 2 4 2-1a7 7 0 0 0 2 1v3h5v-3a7 7 0 0 0 2-1l2 1 2-4-2-1a7 7 0 0 0 .1-1Z"/></>,
    table: <><rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 9h18M8 4v16M15 4v16"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>{paths[name]}</svg>;
}

function Metric({ label, value, note, tone = "blue" }: { label: string; value: string | number; note?: string; tone?: string }) {
  return <article className={`metric tone-${tone}`}><span>{label}</span><strong>{value}</strong>{note && <small>{note}</small>}</article>;
}

function Panel({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return <section className={`panel ${className}`}><header className="panel-title"><h3>{title}</h3><span /></header>{children}</section>;
}

function Sparkline({ values, color = "#1768c7", labels = false }: { values: number[]; color?: string; labels?: boolean }) {
  const min = Math.min(...values), max = Math.max(...values), range = Math.max(max-min, 1);
  const points = values.map((v,i) => `${20+i*(560/(values.length-1))},${160-((v-min)/range)*120}`).join(" ");
  return <svg className="sparkline" viewBox="0 0 600 190" preserveAspectRatio="none" role="img" aria-label="Grafik tren">
    {[40,80,120,160].map(y=><line key={y} x1="20" x2="580" y1={y} y2={y} className="gridline"/>)}
    <polyline points={points} fill="none" stroke={color} strokeWidth="5" strokeLinejoin="round" strokeLinecap="round"/>
    {values.map((v,i)=><circle key={i} cx={20+i*(560/(values.length-1))} cy={160-((v-min)/range)*120} r="4" fill="#fff" stroke={color} strokeWidth="3"/>)}
    {labels && values.map((_,i)=> i%3===0 ? <text key={i} x={20+i*(560/(values.length-1))} y="183" textAnchor="middle">{2011+i}</text>:null)}
  </svg>;
}

function Donut({ value, color, label }: { value: number; color: string; label: string }) {
  return <div className="donut-wrap"><div className="donut" style={{ background: `conic-gradient(${color} ${value*3.6}deg,#e8eef5 0)` }}><div><strong>{value}</strong><small>/ 100</small></div></div><span>{label}</span></div>;
}

function ImageCard({ src, alt, fallback }: { src: string; alt: string; fallback: string }) {
  const [failed,setFailed]=useState(false);
  return <div className="asset-image">{failed ? <div className="image-fallback"><Icon name="portfolio"/><span>{fallback}</span></div> : <img src={src} alt={alt} onError={()=>setFailed(true)}/>}</div>;
}

export default function Home() {
  const [data,setData]=useState<DashboardData|null>(null); const [page,setPage]=useState("overview");
  const [assetCode,setAssetCode]=useState("PA-002"); const [riskFilter,setRiskFilter]=useState("Semua"); const [query,setQuery]=useState("");
  useEffect(()=>{ fetch("./data/dashboard.json").then(r=>r.json()).then(setData); },[]);
  const assets=data?.main ?? []; const asset=assets.find(a=>a["Kode Aset"]===assetCode) ?? assets[0];
  const filtered=useMemo(()=>assets.filter(a=>(riskFilter==="Semua"||a["Kategori Risiko"]===riskFilter)&&(`${a["Kode Aset"]} ${a["Jenis Aset"]}`).toLowerCase().includes(query.toLowerCase())),[assets,riskFilter,query]);
  const avgRisk=assets.length?Math.round(assets.reduce((s,a)=>s+a["Risk Score"],0)/assets.length):0;
  const avgCondition=assets.length?Math.round(assets.reduce((s,a)=>s+a["Nilai Kondisi"],0)/assets.length):0;
  const high=assets.filter(a=>["Tinggi","Kritis"].includes(a["Kategori Risiko"])).length;
  const selectedTrend=(key:string)=>{const row=data?.[key as keyof DashboardData] as Row[]|undefined; const found=row?.find(r=>r["Kode Aset"]===assetCode); return found?Object.entries(found).filter(([k])=>/^(Kond|RS)_\d{4}$/.test(k)).map(([,v])=>Number(v)):[]};
  if(!data||!asset) return <main className="loading"><img src="./assets/be-arise-logo.png" alt="Be-ARISE"/><div className="loader"/><p>Menyiapkan dashboard aset...</p></main>;

  const release=`https://github.com/vgstudioid-hash/ujicoba/releases/download/skp-models-current/${assetCode}.skp`;
  const layout=`https://raw.githubusercontent.com/vgstudioid-hash/ujicoba/refs/heads/main/Models/Layout/${assetCode}.layout`;
  const tour=`https://vgstudioid-hash.github.io/ujicoba/VirtualTour/index.htm?media-name=${encodeURIComponent(assetCode)}`;
  const inspection=data.histori_inspeksi.find(r=>r["Kode Aset"]===assetCode);
  const maintenance=data.histori_pemeliharaan.find(r=>r["Kode Aset"]===assetCode);
  const decision=data.decision_taken.find(r=>r["Kode Aset"]===assetCode);

  return <main className="app-shell">
    <aside className="sidebar">
      <div className="brand-block"><img className="pjt-logo" src="./assets/pjt2-logo.png" alt="Perum Jasa Tirta II"/><img className="brand-logo" src="./assets/be-arise-logo.png" alt="Be-ARISE"/></div>
      <div className="sidebar-caption">ASSET RISK INTELLIGENCE</div>
      <nav>{pages.map(([id,label,icon])=><button key={id} className={page===id?"active":""} onClick={()=>setPage(id)}><Icon name={icon}/><span>{label}</span></button>)}</nav>
      <div className="sidebar-status"><span className="pulse"/><div><strong>Prototype Online</strong><small>20 aset terintegrasi</small></div></div>
    </aside>
    <section className="workspace">
      <header className="topbar">
        <div><p>BE-ARISE / DASHBOARD</p><h1>{pages.find(p=>p[0]===page)?.[1]}</h1></div>
        <div className="asset-picker"><label htmlFor="asset">Pilih Aset</label><select id="asset" value={assetCode} onChange={e=>setAssetCode(e.target.value)}>{assets.map(a=><option key={a["Kode Aset"]} value={a["Kode Aset"]}>{a["Kode Aset"]} — {a["Jenis Aset"]}</option>)}</select></div>
      </header>

      <div className="content">
        {page==="overview" && <Overview assets={assets} avgRisk={avgRisk} avgCondition={avgCondition} high={high} setPage={setPage} setAssetCode={setAssetCode}/>} 
        {page==="portfolio" && <Portfolio assets={filtered} all={assets} riskFilter={riskFilter} setRiskFilter={setRiskFilter} query={query} setQuery={setQuery} setAssetCode={setAssetCode} setPage={setPage}/>} 
        {page==="intelligence" && <Intelligence asset={asset} inspection={inspection} maintenance={maintenance} decision={decision}/>} 
        {page==="performance" && <Performance asset={asset} condition={selectedTrend("trend_kondisi")} risk={selectedTrend("trend_RS")} maintenance={maintenance}/>} 
        {page==="virtual" && <Virtual asset={asset} release={release} layout={layout} tour={tour}/>} 
        {page==="system" && <System/>}
        {page==="summary" && <Summary assets={filtered} query={query} setQuery={setQuery} setAssetCode={setAssetCode} setPage={setPage}/>} 
      </div>
    </section>
  </main>;
}

function Overview({assets,avgRisk,avgCondition,high,setPage,setAssetCode}:{assets:Asset[];avgRisk:number;avgCondition:number;high:number;setPage:(p:string)=>void;setAssetCode:(c:string)=>void}){
  const categories=["Rendah","Sedang","Tinggi","Kritis"].map(k=>({k,n:assets.filter(a=>a["Kategori Risiko"]===k).length}));
  const top=[...assets].sort((a,b)=>b["Risk Score"]-a["Risk Score"]).slice(0,6);
  return <div className="dashboard-grid overview-grid">
    <div className="metric-row span-12"><Metric label="Total Aset" value={assets.length} note="Aset terdaftar"/><Metric label="Rata-rata Risk Score" value={avgRisk} note="Skala 0–100" tone="amber"/><Metric label="Kondisi Rata-rata" value={`${avgCondition}%`} note="Seluruh aset" tone="green"/><Metric label="Risiko Tinggi & Kritis" value={high} note="Memerlukan perhatian" tone="red"/></div>
    <Panel title="Peta Risiko Dampak × Probabilitas" className="span-7"><div className="risk-matrix"><div className="axis-y">DAMPAK →</div>{[5,4,3,2,1].map(y=>[1,2,3,4,5].map(x=>{const count=assets.filter(a=>Math.min(5,Math.max(1,Math.ceil(a.Kritikalitas/20)))===y&&Math.min(5,Math.max(1,Math.ceil(a["Risk Score"]/20)))===x).length;return <div key={`${x}${y}`} className={`cell c${x+y}`}>{count||""}</div>}))}<div className="axis-x">PROBABILITAS →</div></div></Panel>
    <Panel title="Distribusi Kategori Risiko" className="span-5"><div className="category-list">{categories.map(c=><div key={c.k}><span className="dot" style={{background:riskColor[c.k]}}/><strong>{c.n}</strong><span>{c.k}</span><div className="bar"><i style={{width:`${c.n/assets.length*100}%`,background:riskColor[c.k]}}/></div></div>)}</div></Panel>
    <Panel title="Peringkat Risiko Aset" className="span-7"><div className="ranking">{top.map((a,i)=><button key={a["Kode Aset"]} onClick={()=>{setAssetCode(a["Kode Aset"]);setPage("intelligence")}}><b>{i+1}</b><span><strong>{a["Kode Aset"]}</strong><small>{a["Jenis Aset"]}</small></span><div><i style={{width:`${a["Risk Score"]}%`,background:riskColor[a["Kategori Risiko"]]}}/></div><em>{a["Risk Score"]}</em></button>)}</div></Panel>
    <Panel title="Ringkasan Kondisi Portfolio" className="span-5"><div className="overview-donuts"><Donut value={avgCondition} color="#159957" label="Kondisi"/><Donut value={avgRisk} color="#f59e0b" label="Risk Score"/></div><p className="insight">Analisis otomatis menunjukkan <b>{high} aset</b> perlu masuk agenda inspeksi atau penanganan prioritas.</p></Panel>
  </div>
}

function Portfolio({assets,all,riskFilter,setRiskFilter,query,setQuery,setAssetCode,setPage}:{assets:Asset[];all:Asset[];riskFilter:string;setRiskFilter:(v:string)=>void;query:string;setQuery:(v:string)=>void;setAssetCode:(v:string)=>void;setPage:(v:string)=>void}){
  return <div className="portfolio-page"><div className="filterbar"><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Cari kode atau jenis aset..."/><select value={riskFilter} onChange={e=>setRiskFilter(e.target.value)}><option>Semua</option>{Object.keys(riskColor).map(r=><option key={r}>{r}</option>)}</select><span>{assets.length} dari {all.length} aset</span></div>
    <div className="asset-card-grid">{assets.map(a=><button className="asset-card" key={a["Kode Aset"]} onClick={()=>{setAssetCode(a["Kode Aset"]);setPage("intelligence")}}><ImageCard src={a["Image Asset URL"]} alt={a["Jenis Aset"]} fallback={a["Kode Aset"]}/><div className="asset-card-body"><div><span className="risk-pill" style={{background:riskColor[a["Kategori Risiko"]]}}>{a["Kategori Risiko"]}</span><small>{a["Zona Operasi"]}</small></div><h3>{a["Kode Aset"]}</h3><p>{a["Jenis Aset"]}</p><div className="mini-stats"><span>Risk <b>{a["Risk Score"]}</b></span><span>Kondisi <b>{a["Nilai Kondisi"]}%</b></span><span>Umur <b>{a["Umur Teknis"]} th</b></span></div></div></button>)}</div></div>
}

function Intelligence({asset,inspection,maintenance,decision}:{asset:Asset;inspection?:Row;maintenance?:Row;decision?:Row}){
  const components=[["Umur Aset",asset.RS_Umur],["Kondisi",asset["RS_Nilai Kondisi"]],["Kritikalitas",asset.RS_Kritikalitas],["Gangguan",asset.RS_Gangguan]] as [string,number][];
  return <div className="dashboard-grid intel-grid"><Panel title="Foto Aset" className="span-4"><ImageCard src={asset["Image Asset URL"]} alt={asset["Jenis Aset"]} fallback={asset["Kode Aset"]}/></Panel><div className="metric-row span-8"><Metric label="Risk Score" value={`${asset["Risk Score"]}/100`} tone="amber"/><Metric label="Kondisi" value={`${asset["Nilai Kondisi"]}%`} tone="green"/><Metric label="Gangguan" value={asset.Gangguan} tone="red"/></div>
    <Panel title="Model Teknis 2D" className="span-4"><ImageCard src={asset["2D Model URL"]} alt={`Model 2D ${asset["Kode Aset"]}`} fallback="Gambar teknis 2D"/></Panel><Panel title="Komponen Pembentuk Risk Score" className="span-4"><div className="components">{components.map(([k,v])=><div key={k}><span>{k}</span><div><i style={{width:`${Math.min(100,Number(v)*3.3)}%`}}/></div><b>{v}</b></div>)}</div></Panel><Panel title="Profil Teknis Aset" className="span-4"><dl className="profile"><dt>Jenis</dt><dd>{asset["Jenis Aset"]}</dd><dt>Fungsi</dt><dd>{asset["Fungsi Bangunan"]}</dd><dt>Dimensi</dt><dd>{asset["Dimensi Bangunan"]}</dd><dt>Material</dt><dd>{asset["Material Utama"]}</dd><dt>Status</dt><dd>{asset["Status Operasi"]}</dd></dl></Panel>
    <Panel title="Identitas Aset" className="span-4"><dl className="profile"><dt>Kode Aset</dt><dd>{asset["Kode Aset"]}</dd><dt>Tahun Bangun</dt><dd>{asset["Tahun Bangun"]}</dd><dt>Umur Aset</dt><dd>{asset["Umur Teknis"]} tahun</dd><dt>Kritikalitas</dt><dd>{asset.Kritikalitas}/100</dd></dl></Panel><Panel title="Inspeksi Terakhir" className="span-4"><p className="date-big">{String(inspection?.["Inspeksi Terakhir"]??"-")}</p><p>{inspection?.["Jenis Inspeksi"]} · {inspection?.["Petugas Inspeksi"]}</p><span className="status-chip">{inspection?.Kondisi}</span></Panel><Panel title="Pemeliharaan Terakhir" className="span-4"><p className="date-big">{String(maintenance?.["Pemeliharaan Terakhir"]??"-")}</p><p>{maintenance?.["Jenis Pemeliharaan"]} · {maintenance?.Pelaksana}</p><b className="cost">Rp {Number(maintenance?.["Biaya (Rp)"]||0).toLocaleString("id-ID")}</b></Panel><Panel title="Rekomendasi Penanganan" className="span-12 recommendation"><div className="ai-badge">AI</div><div><strong>{decision?.Rekomendasi}</strong><p>{Number(asset["Risk Score"])>=80?"Prioritas rehabilitasi segera dan inspeksi mendalam.":Number(asset["Risk Score"])>=60?"Lakukan inspeksi khusus dan siapkan rencana perbaikan.":"Lanjutkan pemeliharaan rutin dan monitoring berkala."}</p></div><span>Target {decision?.["Target Tahun"]}</span></Panel></div>
}

function Performance({asset,condition,risk,maintenance}:{asset:Asset;condition:number[];risk:number[];maintenance?:Row}){
  return <div className="dashboard-grid"><div className="metric-row span-12"><Metric label="Nilai Kondisi 2026" value={`${asset["Nilai Kondisi"]}%`} tone="green"/><Metric label="Risk Score 2026" value={asset["Risk Score"]} tone="amber"/><Metric label="Umur Teknis" value={`${asset["Umur Teknis"]} th`}/><Metric label="Biaya Terakhir" value={`Rp ${(Number(maintenance?.["Biaya (Rp)"]||0)/1e6).toFixed(0)} jt`} tone="red"/></div><Panel title="Tren Kondisi 2011–2026" className="span-8"><Sparkline values={condition} color="#159957" labels/></Panel><Panel title="Kondisi Saat Ini" className="span-4"><Donut value={asset["Nilai Kondisi"]} color={asset["Nilai Kondisi"]>70?"#159957":asset["Nilai Kondisi"]>40?"#f59e0b":"#dc2626"} label={asset["Nilai Kondisi"]>70?"BAIK":asset["Nilai Kondisi"]>40?"RUSAK RINGAN":"RUSAK BERAT"}/></Panel><Panel title="Tren Risk Score 2011–2026" className="span-8"><Sparkline values={risk} color="#f59e0b" labels/></Panel><Panel title="Analisis Performa" className="span-4"><div className="analysis-box"><strong>{asset["Kode Aset"]}</strong><p>Perubahan kondisi dan risiko dibandingkan secara historis untuk mendeteksi kebutuhan intervensi.</p><ul><li>Nilai kondisi: {asset["Nilai Kondisi"]}/100</li><li>Risk score: {asset["Risk Score"]}/100</li><li>Prioritas: {asset.Prioritas}</li></ul></div></Panel></div>
}

function Virtual({asset,release,layout,tour}:{asset:Asset;release:string;layout:string;tour:string}){
  return <div className="virtual-grid"><section className="virtual-side"><Panel title="Aset Terpilih"><ImageCard src={asset["Image Asset URL"]} alt={asset["Jenis Aset"]} fallback={asset["Kode Aset"]}/></Panel><Panel title="Identitas Aset"><dl className="profile"><dt>Kode</dt><dd>{asset["Kode Aset"]}</dd><dt>Jenis</dt><dd>{asset["Jenis Aset"]}</dd><dt>Tahun</dt><dd>{asset["Tahun Bangun"]}</dd><dt>Zona</dt><dd>{asset["Zona Operasi"]}</dd></dl></Panel><Panel title="Tanggal Dokumentasi"><p className="date-big">{asset["Inspeksi Terakhir"]}</p></Panel></section><Panel title="Virtual Asset 360" className="virtual-main"><a href={tour} target="_blank" rel="noreferrer" className="tour-image"><ImageCard src={asset["Image 3D URL"]} alt={`Virtual asset ${asset["Kode Aset"]}`} fallback="Buka Virtual Tour 360"/><span className="tour-cta"><Icon name="rotate"/> Buka panorama 360°</span></a><div className="action-row"><a className="action red" href={layout}>Unduh LayOut</a><a className="action green" href={release}>Unduh Model 3D</a><a className="action blue" href={tour} target="_blank" rel="noreferrer">View 360</a></div></Panel></div>
}

function System(){return <div className="system-grid"><Panel title="Formulasi Risk Score"><div className="formula"><b>RISK SCORE =</b><span>(Kondisi × 30%) + (Umur × 30%) + (Gangguan × 20%) + (Kritikalitas × 20%)</span><p>Skor akhir berada pada skala 0–100 dan digunakan sebagai dasar kategori risiko serta rekomendasi penanganan.</p></div></Panel><Panel title="Bobot & Sumber Informasi"><ul className="clean-list"><li><b>Umur aset</b><span>30%</span></li><li><b>Nilai kondisi</b><span>30%</span></li><li><b>Gangguan operasional</b><span>20%</span></li><li><b>Kritikalitas aset</b><span>20%</span></li></ul></Panel><Panel title="Kategori Risiko"><div className="legend-cards">{[["Rendah","0–39"],["Sedang","40–59"],["Tinggi","60–79"],["Kritis","80–100"]].map(([k,v])=><div key={k} style={{borderColor:riskColor[k]}}><i style={{background:riskColor[k]}}/><b>{k}</b><span>{v}</span></div>)}</div></Panel><Panel title="Klasifikasi Kondisi"><div className="legend-cards">{[["Baik","> 70","#159957"],["Rusak Ringan","41–70","#f59e0b"],["Rusak Berat","≤ 40","#dc2626"]].map(([k,v,c])=><div key={k} style={{borderColor:c}}><i style={{background:c}}/><b>{k}</b><span>{v}</span></div>)}</div></Panel><Panel title="Tata Kelola dan Kualitas Data"><ol className="method"><li>Sumber data aset, inspeksi, dan pemeliharaan terstruktur.</li><li>Validasi kode aset dan konsistensi nilai.</li><li>Perhitungan Risk Score berdasarkan parameter terukur.</li><li>Pembaruan data mengikuti siklus inspeksi.</li></ol></Panel><Panel title="Alur Sistem Be-ARISE"><ol className="method"><li>Data aset masuk ke model.</li><li>Sistem menghitung nilai kondisi dan risiko.</li><li>Dashboard menyusun peringkat prioritas.</li><li>Rekomendasi penanganan ditampilkan.</li><li>Model digital dan panorama mendukung verifikasi.</li></ol></Panel></div>}

function Summary({assets,query,setQuery,setAssetCode,setPage}:{assets:Asset[];query:string;setQuery:(v:string)=>void;setAssetCode:(v:string)=>void;setPage:(v:string)=>void}){return <div className="summary-page"><div className="filterbar"><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Cari aset..."/><span>{assets.length} aset ditampilkan</span></div><div className="table-wrap"><table><thead><tr><th>Kode</th><th>Jenis Aset</th><th>Zona</th><th>Tahun</th><th>Kondisi</th><th>Risk Score</th><th>Kategori</th><th>Prioritas</th><th></th></tr></thead><tbody>{assets.map(a=><tr key={a["Kode Aset"]}><td><b>{a["Kode Aset"]}</b></td><td>{a["Jenis Aset"]}</td><td>{a["Zona Operasi"]}</td><td>{a["Tahun Bangun"]}</td><td><span className="condition-value">{a["Nilai Kondisi"]}%</span></td><td><b>{a["Risk Score"]}</b></td><td><span className="risk-pill" style={{background:riskColor[a["Kategori Risiko"]]}}>{a["Kategori Risiko"]}</span></td><td>{a.Prioritas}</td><td><button onClick={()=>{setAssetCode(a["Kode Aset"]);setPage("intelligence")}}>Detail</button></td></tr>)}</tbody></table></div></div>}
