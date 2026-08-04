(function(){
    var script = {
 "vrPolyfillScale": 1,
 "id": "rootPlayer",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_6658D838_74AF_8B5A_41D7_154D466041BB,this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57,this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "verticalAlign": "top",
 "width": "100%",
 "children": [
  "this.MainViewer",
  "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_BD141CC8_9478_145B_41D4_265F47E47DB6",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_BD84EAD4_9478_3C4B_41C0_BDBA5096F748"
 ],
 "buttonToggleMute": [
  "this.IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D"
 ],
 "scrollBarWidth": 10,
 "overflow": "visible",
 "backgroundPreloadEnabled": true,
 "minHeight": 20,
 "borderSize": 0,
 "layout": "absolute",
 "desktopMipmappingEnabled": false,
 "definitions": [{
 "duration": 5000,
 "class": "Photo",
 "label": "SI-001",
 "id": "album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_14",
 "width": 1535,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_14.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_14_t.png",
 "height": 1024
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "GA-003",
 "id": "album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_4",
 "width": 1448,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_4.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_4_t.png",
 "height": 1086
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_E7B29825_CB1A_79BF_41D7_972EE9B00893, 0)",
   "media": "this.album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE",
   "player": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_E7B29825_CB1A_79BF_41D7_972EE9B00893",
 "class": "PlayList"
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "GA-003",
 "id": "album_D64A0276_CB2A_099C_41D9_95CDF4606B08_4",
 "width": 1536,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_4.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_4_t.png",
 "height": 1024
},
{
 "viewerArea": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "class": "PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "SW-001",
 "id": "album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_18",
 "width": 1672,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_18.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_18_t.png",
 "height": 941
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "SI-004",
 "id": "album_D64A0276_CB2A_099C_41D9_95CDF4606B08_17",
 "width": 1536,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_17.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_17_t.png",
 "height": 1024
},
{
 "items": [
  {
   "camera": "this.panorama_C155F98B_CAFE_7A8B_41E6_2FF38AAD2F70_camera",
   "media": "this.panorama_C155F98B_CAFE_7A8B_41E6_2FF38AAD2F70",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00D8D7D_CAFE_7B8F_41C5_316CFB0B8371_camera",
   "media": "this.panorama_C00D8D7D_CAFE_7B8F_41C5_316CFB0B8371",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00C6016_CAFE_099D_41E6_3BC6884DE5B0_camera",
   "media": "this.panorama_C00C6016_CAFE_099D_41E6_3BC6884DE5B0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00F1280_CAFE_0974_41E1_D5EC7DCC1C76_camera",
   "media": "this.panorama_C00F1280_CAFE_0974_41E1_D5EC7DCC1C76",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00FE4C9_CAFE_0AF7_41BC_EDC830246627_camera",
   "media": "this.panorama_C00FE4C9_CAFE_0AF7_41BC_EDC830246627",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00E1733_CAFE_179B_41E3_F31BC8F54472_camera",
   "media": "this.panorama_C00E1733_CAFE_179B_41E3_F31BC8F54472",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00C9982_CAFE_1B75_41E3_B0D6588CCBA6_camera",
   "media": "this.panorama_C00C9982_CAFE_1B75_41E3_B0D6588CCBA6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00CCBD9_CAFE_1E97_41E8_3C3A9CC31E66_camera",
   "media": "this.panorama_C00CCBD9_CAFE_1E97_41E8_3C3A9CC31E66",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00C4E93_CAFE_169B_41D1_FB1A4C18D620_camera",
   "media": "this.panorama_C00C4E93_CAFE_169B_41D1_FB1A4C18D620",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00CA0D2_CAFE_0A95_41E8_0D62766C9282_camera",
   "media": "this.panorama_C00CA0D2_CAFE_0A95_41E8_0D62766C9282",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00FF328_CAFE_0FB5_41D6_02DAD7C93E72_camera",
   "media": "this.panorama_C00FF328_CAFE_0FB5_41D6_02DAD7C93E72",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00F15E2_CAFE_0AB4_41A5_E11499F7BE69_camera",
   "media": "this.panorama_C00F15E2_CAFE_0AB4_41A5_E11499F7BE69",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00C582F_CAFE_398B_41E0_677B89AC7EF4_camera",
   "media": "this.panorama_C00C582F_CAFE_398B_41E0_677B89AC7EF4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00C0A73_CAFE_399B_41E8_9A1C4887C0E0_camera",
   "media": "this.panorama_C00C0A73_CAFE_399B_41E8_9A1C4887C0E0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00CACAA_CAFE_3AB5_41E8_74799C0B547B_camera",
   "media": "this.panorama_C00CACAA_CAFE_3AB5_41E8_74799C0B547B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00E3EF7_CAFE_369B_41DC_A92D30AFED02_camera",
   "media": "this.panorama_C00E3EF7_CAFE_369B_41DC_A92D30AFED02",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C008C163_CAFE_0BBB_41D9_5AD1ECA55545_camera",
   "media": "this.panorama_C008C163_CAFE_0BBB_41D9_5AD1ECA55545",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00EE3B4_CAFE_0E9D_41E6_13CC33F84A46_camera",
   "media": "this.panorama_C00EE3B4_CAFE_0E9D_41E6_13CC33F84A46",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00F95FC_CAFE_0A8D_41C3_BFECC4C4CEB1_camera",
   "media": "this.panorama_C00F95FC_CAFE_0A8D_41C3_BFECC4C4CEB1",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00E884B_CAFE_198B_41D6_F49862232C6F_camera",
   "media": "this.panorama_C00E884B_CAFE_198B_41D6_F49862232C6F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "media": "this.album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 0)",
   "media": "this.album_D64A0276_CB2A_099C_41D9_95CDF4606B08",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C00CCBD9_CAFE_1E97_41E8_3C3A9CC31E66_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C00E884B_CAFE_198B_41D6_F49862232C6F_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00F1280_CAFE_0974_41E1_D5EC7DCC1C76_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00F1280_CAFE_0974_41E1_D5EC7DCC1C76_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00F1280_CAFE_0974_41E1_D5EC7DCC1C76_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00F1280_CAFE_0974_41E1_D5EC7DCC1C76_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00F1280_CAFE_0974_41E1_D5EC7DCC1C76_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00F1280_CAFE_0974_41E1_D5EC7DCC1C76_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00F1280_CAFE_0974_41E1_D5EC7DCC1C76_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00F1280_CAFE_0974_41E1_D5EC7DCC1C76_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00F1280_CAFE_0974_41E1_D5EC7DCC1C76_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00F1280_CAFE_0974_41E1_D5EC7DCC1C76_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00F1280_CAFE_0974_41E1_D5EC7DCC1C76_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00F1280_CAFE_0974_41E1_D5EC7DCC1C76_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C00F1280_CAFE_0974_41E1_D5EC7DCC1C76_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "150%",
 "label": "GA-002",
 "id": "panorama_C00F1280_CAFE_0974_41E1_D5EC7DCC1C76",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C00F1280_CAFE_0974_41E1_D5EC7DCC1C76_t.jpg"
},
{
 "viewerArea": "this.ViewerAreaLabeled_D7B00FFE_CB2A_168C_41B0_D8CB0C528331",
 "class": "PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "id": "ViewerAreaLabeled_D7B00FFE_CB2A_168C_41B0_D8CB0C528331PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "SI-002",
 "id": "album_D64A0276_CB2A_099C_41D9_95CDF4606B08_15",
 "width": 1536,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_15.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_15_t.png",
 "height": 1024
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "PA-003",
 "id": "album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_12",
 "width": 1536,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_12.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_12_t.png",
 "height": 1024
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C155F98B_CAFE_7A8B_41E6_2FF38AAD2F70_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C155F98B_CAFE_7A8B_41E6_2FF38AAD2F70_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C155F98B_CAFE_7A8B_41E6_2FF38AAD2F70_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C155F98B_CAFE_7A8B_41E6_2FF38AAD2F70_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C155F98B_CAFE_7A8B_41E6_2FF38AAD2F70_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C155F98B_CAFE_7A8B_41E6_2FF38AAD2F70_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C155F98B_CAFE_7A8B_41E6_2FF38AAD2F70_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C155F98B_CAFE_7A8B_41E6_2FF38AAD2F70_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C155F98B_CAFE_7A8B_41E6_2FF38AAD2F70_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C155F98B_CAFE_7A8B_41E6_2FF38AAD2F70_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C155F98B_CAFE_7A8B_41E6_2FF38AAD2F70_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C155F98B_CAFE_7A8B_41E6_2FF38AAD2F70_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C155F98B_CAFE_7A8B_41E6_2FF38AAD2F70_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "150%",
 "label": "BD-001",
 "id": "panorama_C155F98B_CAFE_7A8B_41E6_2FF38AAD2F70",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C155F98B_CAFE_7A8B_41E6_2FF38AAD2F70_t.jpg"
},
{
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C00F95FC_CAFE_0A8D_41C3_BFECC4C4CEB1_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "PH-001",
 "id": "album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_13",
 "width": 1402,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_13.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_13_t.png",
 "height": 935
},
{
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C00C9982_CAFE_1B75_41E3_B0D6588CCBA6_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "INT-002",
 "id": "album_D64A0276_CB2A_099C_41D9_95CDF4606B08_6",
 "width": 1622,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_6.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_6_t.png",
 "height": 970
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "INT-003",
 "id": "album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_7",
 "width": 1672,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_7.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_7_t.png",
 "height": 941
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "BD-001",
 "id": "album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_0",
 "width": 1536,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_0.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_0_t.png",
 "height": 1024
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "BD-002",
 "id": "album_D64A0276_CB2A_099C_41D9_95CDF4606B08_1",
 "width": 1536,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_1.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_1_t.png",
 "height": 1024
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "SI-004",
 "id": "album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_17",
 "width": 1536,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_17.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_17_t.png",
 "height": 1024
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "INT-004",
 "id": "album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_8",
 "width": 1672,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_8.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_8_t.png",
 "height": 941
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "BD-002",
 "id": "album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_1",
 "width": 1536,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_1.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_1_t.png",
 "height": 1024
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "INT-004",
 "id": "album_D64A0276_CB2A_099C_41D9_95CDF4606B08_8",
 "width": 1619,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_8.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_8_t.png",
 "height": 971
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "PA-002",
 "id": "album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_11",
 "width": 1536,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_11.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_11_t.png",
 "height": 1024
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C582F_CAFE_398B_41E0_677B89AC7EF4_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C582F_CAFE_398B_41E0_677B89AC7EF4_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C582F_CAFE_398B_41E0_677B89AC7EF4_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C582F_CAFE_398B_41E0_677B89AC7EF4_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C582F_CAFE_398B_41E0_677B89AC7EF4_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C582F_CAFE_398B_41E0_677B89AC7EF4_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C582F_CAFE_398B_41E0_677B89AC7EF4_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C582F_CAFE_398B_41E0_677B89AC7EF4_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C582F_CAFE_398B_41E0_677B89AC7EF4_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C582F_CAFE_398B_41E0_677B89AC7EF4_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C582F_CAFE_398B_41E0_677B89AC7EF4_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C582F_CAFE_398B_41E0_677B89AC7EF4_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C00C582F_CAFE_398B_41E0_677B89AC7EF4_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "150%",
 "label": "PA-003",
 "id": "panorama_C00C582F_CAFE_398B_41E0_677B89AC7EF4",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C00C582F_CAFE_398B_41E0_677B89AC7EF4_t.jpg"
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "PH-001",
 "id": "album_D64A0276_CB2A_099C_41D9_95CDF4606B08_13",
 "width": 1536,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_13.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_13_t.png",
 "height": 1024
},
{
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C00D8D7D_CAFE_7B8F_41C5_316CFB0B8371_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C00C4E93_CAFE_169B_41D1_FB1A4C18D620_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00FE4C9_CAFE_0AF7_41BC_EDC830246627_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00FE4C9_CAFE_0AF7_41BC_EDC830246627_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00FE4C9_CAFE_0AF7_41BC_EDC830246627_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00FE4C9_CAFE_0AF7_41BC_EDC830246627_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00FE4C9_CAFE_0AF7_41BC_EDC830246627_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00FE4C9_CAFE_0AF7_41BC_EDC830246627_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00FE4C9_CAFE_0AF7_41BC_EDC830246627_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00FE4C9_CAFE_0AF7_41BC_EDC830246627_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00FE4C9_CAFE_0AF7_41BC_EDC830246627_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00FE4C9_CAFE_0AF7_41BC_EDC830246627_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00FE4C9_CAFE_0AF7_41BC_EDC830246627_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00FE4C9_CAFE_0AF7_41BC_EDC830246627_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C00FE4C9_CAFE_0AF7_41BC_EDC830246627_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "150%",
 "label": "GA-003",
 "id": "panorama_C00FE4C9_CAFE_0AF7_41BC_EDC830246627",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C00FE4C9_CAFE_0AF7_41BC_EDC830246627_t.jpg"
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "INT-001",
 "id": "album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_5",
 "width": 1672,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_5.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_5_t.png",
 "height": 941
},
{
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C00E1733_CAFE_179B_41E3_F31BC8F54472_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C008C163_CAFE_0BBB_41D9_5AD1ECA55545_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C008C163_CAFE_0BBB_41D9_5AD1ECA55545_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C008C163_CAFE_0BBB_41D9_5AD1ECA55545_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C008C163_CAFE_0BBB_41D9_5AD1ECA55545_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C008C163_CAFE_0BBB_41D9_5AD1ECA55545_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C008C163_CAFE_0BBB_41D9_5AD1ECA55545_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C008C163_CAFE_0BBB_41D9_5AD1ECA55545_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C008C163_CAFE_0BBB_41D9_5AD1ECA55545_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C008C163_CAFE_0BBB_41D9_5AD1ECA55545_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C008C163_CAFE_0BBB_41D9_5AD1ECA55545_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C008C163_CAFE_0BBB_41D9_5AD1ECA55545_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C008C163_CAFE_0BBB_41D9_5AD1ECA55545_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C008C163_CAFE_0BBB_41D9_5AD1ECA55545_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "150%",
 "label": "SI-003",
 "id": "panorama_C008C163_CAFE_0BBB_41D9_5AD1ECA55545",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C008C163_CAFE_0BBB_41D9_5AD1ECA55545_t.jpg"
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "SW-002",
 "id": "album_D64A0276_CB2A_099C_41D9_95CDF4606B08_19",
 "width": 1536,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_19.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_19_t.png",
 "height": 1024
},
{
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C00EE3B4_CAFE_0E9D_41E6_13CC33F84A46_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "SI-002",
 "id": "album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_15",
 "width": 1536,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_15.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_15_t.png",
 "height": 1024
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C6016_CAFE_099D_41E6_3BC6884DE5B0_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C6016_CAFE_099D_41E6_3BC6884DE5B0_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C6016_CAFE_099D_41E6_3BC6884DE5B0_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C6016_CAFE_099D_41E6_3BC6884DE5B0_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C6016_CAFE_099D_41E6_3BC6884DE5B0_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C6016_CAFE_099D_41E6_3BC6884DE5B0_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C6016_CAFE_099D_41E6_3BC6884DE5B0_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C6016_CAFE_099D_41E6_3BC6884DE5B0_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C6016_CAFE_099D_41E6_3BC6884DE5B0_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C6016_CAFE_099D_41E6_3BC6884DE5B0_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C6016_CAFE_099D_41E6_3BC6884DE5B0_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C6016_CAFE_099D_41E6_3BC6884DE5B0_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C00C6016_CAFE_099D_41E6_3BC6884DE5B0_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "150%",
 "label": "GA-001",
 "id": "panorama_C00C6016_CAFE_099D_41E6_3BC6884DE5B0",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C00C6016_CAFE_099D_41E6_3BC6884DE5B0_t.jpg"
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "INT-005",
 "id": "album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_9",
 "width": 1672,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_9.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_9_t.png",
 "height": 941
},
{
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C00C6016_CAFE_099D_41E6_3BC6884DE5B0_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "BD-001",
 "id": "album_D64A0276_CB2A_099C_41D9_95CDF4606B08_0",
 "width": 1536,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_0.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_0_t.png",
 "height": 1024
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "GA-001",
 "id": "album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_2",
 "width": 1448,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_2.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_2_t.png",
 "height": 1086
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "GA-002",
 "id": "album_D64A0276_CB2A_099C_41D9_95CDF4606B08_3",
 "width": 1536,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_3.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_3_t.png",
 "height": 1024
},
{
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C00F15E2_CAFE_0AB4_41A5_E11499F7BE69_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "PA-001",
 "id": "album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_10",
 "width": 1448,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_10.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_10_t.png",
 "height": 1086
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "INT-001",
 "id": "album_D64A0276_CB2A_099C_41D9_95CDF4606B08_5",
 "width": 1619,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_5.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_5_t.png",
 "height": 971
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_E7B21825_CB1A_79BF_41D8_C5846AD14979, 0)",
   "media": "this.album_D64A0276_CB2A_099C_41D9_95CDF4606B08",
   "player": "this.ViewerAreaLabeled_D7B00FFE_CB2A_168C_41B0_D8CB0C528331PhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_E7B21825_CB1A_79BF_41D8_C5846AD14979",
 "class": "PlayList"
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "SW-002",
 "id": "album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_19",
 "width": 1672,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_19.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_19_t.png",
 "height": 941
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C0A73_CAFE_399B_41E8_9A1C4887C0E0_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C0A73_CAFE_399B_41E8_9A1C4887C0E0_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C0A73_CAFE_399B_41E8_9A1C4887C0E0_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C0A73_CAFE_399B_41E8_9A1C4887C0E0_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C0A73_CAFE_399B_41E8_9A1C4887C0E0_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C0A73_CAFE_399B_41E8_9A1C4887C0E0_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C0A73_CAFE_399B_41E8_9A1C4887C0E0_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C0A73_CAFE_399B_41E8_9A1C4887C0E0_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C0A73_CAFE_399B_41E8_9A1C4887C0E0_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C0A73_CAFE_399B_41E8_9A1C4887C0E0_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C0A73_CAFE_399B_41E8_9A1C4887C0E0_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C0A73_CAFE_399B_41E8_9A1C4887C0E0_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C00C0A73_CAFE_399B_41E8_9A1C4887C0E0_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "150%",
 "label": "PH-001",
 "id": "panorama_C00C0A73_CAFE_399B_41E8_9A1C4887C0E0",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C00C0A73_CAFE_399B_41E8_9A1C4887C0E0_t.jpg"
},
{
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C155F98B_CAFE_7A8B_41E6_2FF38AAD2F70_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "viewerArea": "this.MainViewer",
 "class": "PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "id": "MainViewerPhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "SI-003",
 "id": "album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_16",
 "width": 1535,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_16.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_16_t.png",
 "height": 1024
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00CCBD9_CAFE_1E97_41E8_3C3A9CC31E66_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00CCBD9_CAFE_1E97_41E8_3C3A9CC31E66_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00CCBD9_CAFE_1E97_41E8_3C3A9CC31E66_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00CCBD9_CAFE_1E97_41E8_3C3A9CC31E66_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00CCBD9_CAFE_1E97_41E8_3C3A9CC31E66_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00CCBD9_CAFE_1E97_41E8_3C3A9CC31E66_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00CCBD9_CAFE_1E97_41E8_3C3A9CC31E66_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00CCBD9_CAFE_1E97_41E8_3C3A9CC31E66_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00CCBD9_CAFE_1E97_41E8_3C3A9CC31E66_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00CCBD9_CAFE_1E97_41E8_3C3A9CC31E66_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00CCBD9_CAFE_1E97_41E8_3C3A9CC31E66_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00CCBD9_CAFE_1E97_41E8_3C3A9CC31E66_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C00CCBD9_CAFE_1E97_41E8_3C3A9CC31E66_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "150%",
 "label": "INT-003",
 "id": "panorama_C00CCBD9_CAFE_1E97_41E8_3C3A9CC31E66",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C00CCBD9_CAFE_1E97_41E8_3C3A9CC31E66_t.jpg"
},
{
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C00FE4C9_CAFE_0AF7_41BC_EDC830246627_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PhotoAlbum",
 "id": "album_D64A0276_CB2A_099C_41D9_95CDF4606B08",
 "playList": "this.album_D64A0276_CB2A_099C_41D9_95CDF4606B08_AlbumPlayList",
 "label": "Photo Album BD-001",
 "thumbnailUrl": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_t.png"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00CA0D2_CAFE_0A95_41E8_0D62766C9282_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00CA0D2_CAFE_0A95_41E8_0D62766C9282_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00CA0D2_CAFE_0A95_41E8_0D62766C9282_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00CA0D2_CAFE_0A95_41E8_0D62766C9282_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00CA0D2_CAFE_0A95_41E8_0D62766C9282_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00CA0D2_CAFE_0A95_41E8_0D62766C9282_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00CA0D2_CAFE_0A95_41E8_0D62766C9282_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00CA0D2_CAFE_0A95_41E8_0D62766C9282_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00CA0D2_CAFE_0A95_41E8_0D62766C9282_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00CA0D2_CAFE_0A95_41E8_0D62766C9282_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00CA0D2_CAFE_0A95_41E8_0D62766C9282_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00CA0D2_CAFE_0A95_41E8_0D62766C9282_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C00CA0D2_CAFE_0A95_41E8_0D62766C9282_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "150%",
 "label": "INT-005",
 "id": "panorama_C00CA0D2_CAFE_0A95_41E8_0D62766C9282",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C00CA0D2_CAFE_0A95_41E8_0D62766C9282_t.jpg"
},
{
 "items": [
  {
   "camera": "this.panorama_C155F98B_CAFE_7A8B_41E6_2FF38AAD2F70_camera",
   "media": "this.panorama_C155F98B_CAFE_7A8B_41E6_2FF38AAD2F70",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00D8D7D_CAFE_7B8F_41C5_316CFB0B8371_camera",
   "media": "this.panorama_C00D8D7D_CAFE_7B8F_41C5_316CFB0B8371",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00C6016_CAFE_099D_41E6_3BC6884DE5B0_camera",
   "media": "this.panorama_C00C6016_CAFE_099D_41E6_3BC6884DE5B0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00F1280_CAFE_0974_41E1_D5EC7DCC1C76_camera",
   "media": "this.panorama_C00F1280_CAFE_0974_41E1_D5EC7DCC1C76",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00FE4C9_CAFE_0AF7_41BC_EDC830246627_camera",
   "media": "this.panorama_C00FE4C9_CAFE_0AF7_41BC_EDC830246627",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00E1733_CAFE_179B_41E3_F31BC8F54472_camera",
   "media": "this.panorama_C00E1733_CAFE_179B_41E3_F31BC8F54472",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00C9982_CAFE_1B75_41E3_B0D6588CCBA6_camera",
   "media": "this.panorama_C00C9982_CAFE_1B75_41E3_B0D6588CCBA6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00CCBD9_CAFE_1E97_41E8_3C3A9CC31E66_camera",
   "media": "this.panorama_C00CCBD9_CAFE_1E97_41E8_3C3A9CC31E66",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00C4E93_CAFE_169B_41D1_FB1A4C18D620_camera",
   "media": "this.panorama_C00C4E93_CAFE_169B_41D1_FB1A4C18D620",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00CA0D2_CAFE_0A95_41E8_0D62766C9282_camera",
   "media": "this.panorama_C00CA0D2_CAFE_0A95_41E8_0D62766C9282",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00FF328_CAFE_0FB5_41D6_02DAD7C93E72_camera",
   "media": "this.panorama_C00FF328_CAFE_0FB5_41D6_02DAD7C93E72",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00F15E2_CAFE_0AB4_41A5_E11499F7BE69_camera",
   "media": "this.panorama_C00F15E2_CAFE_0AB4_41A5_E11499F7BE69",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00C582F_CAFE_398B_41E0_677B89AC7EF4_camera",
   "media": "this.panorama_C00C582F_CAFE_398B_41E0_677B89AC7EF4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00C0A73_CAFE_399B_41E8_9A1C4887C0E0_camera",
   "media": "this.panorama_C00C0A73_CAFE_399B_41E8_9A1C4887C0E0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00CACAA_CAFE_3AB5_41E8_74799C0B547B_camera",
   "media": "this.panorama_C00CACAA_CAFE_3AB5_41E8_74799C0B547B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00E3EF7_CAFE_369B_41DC_A92D30AFED02_camera",
   "media": "this.panorama_C00E3EF7_CAFE_369B_41DC_A92D30AFED02",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C008C163_CAFE_0BBB_41D9_5AD1ECA55545_camera",
   "media": "this.panorama_C008C163_CAFE_0BBB_41D9_5AD1ECA55545",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00EE3B4_CAFE_0E9D_41E6_13CC33F84A46_camera",
   "media": "this.panorama_C00EE3B4_CAFE_0E9D_41E6_13CC33F84A46",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00F95FC_CAFE_0A8D_41C3_BFECC4C4CEB1_camera",
   "media": "this.panorama_C00F95FC_CAFE_0A8D_41C3_BFECC4C4CEB1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C00E884B_CAFE_198B_41D6_F49862232C6F_camera",
   "media": "this.panorama_C00E884B_CAFE_198B_41D6_F49862232C6F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "media": "this.album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "media": "this.album_D64A0276_CB2A_099C_41D9_95CDF4606B08",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "INT-005",
 "id": "album_D64A0276_CB2A_099C_41D9_95CDF4606B08_9",
 "width": 1536,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_9.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_9_t.png",
 "height": 1024
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00D8D7D_CAFE_7B8F_41C5_316CFB0B8371_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00D8D7D_CAFE_7B8F_41C5_316CFB0B8371_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00D8D7D_CAFE_7B8F_41C5_316CFB0B8371_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00D8D7D_CAFE_7B8F_41C5_316CFB0B8371_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00D8D7D_CAFE_7B8F_41C5_316CFB0B8371_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00D8D7D_CAFE_7B8F_41C5_316CFB0B8371_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00D8D7D_CAFE_7B8F_41C5_316CFB0B8371_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00D8D7D_CAFE_7B8F_41C5_316CFB0B8371_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00D8D7D_CAFE_7B8F_41C5_316CFB0B8371_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00D8D7D_CAFE_7B8F_41C5_316CFB0B8371_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00D8D7D_CAFE_7B8F_41C5_316CFB0B8371_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00D8D7D_CAFE_7B8F_41C5_316CFB0B8371_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C00D8D7D_CAFE_7B8F_41C5_316CFB0B8371_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "150%",
 "label": "BD-002",
 "id": "panorama_C00D8D7D_CAFE_7B8F_41C5_316CFB0B8371",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C00D8D7D_CAFE_7B8F_41C5_316CFB0B8371_t.jpg"
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "PA-003",
 "id": "album_D64A0276_CB2A_099C_41D9_95CDF4606B08_12",
 "width": 1536,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_12.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_12_t.png",
 "height": 1024
},
{
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C00CA0D2_CAFE_0A95_41E8_0D62766C9282_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00F15E2_CAFE_0AB4_41A5_E11499F7BE69_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00F15E2_CAFE_0AB4_41A5_E11499F7BE69_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00F15E2_CAFE_0AB4_41A5_E11499F7BE69_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00F15E2_CAFE_0AB4_41A5_E11499F7BE69_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00F15E2_CAFE_0AB4_41A5_E11499F7BE69_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00F15E2_CAFE_0AB4_41A5_E11499F7BE69_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00F15E2_CAFE_0AB4_41A5_E11499F7BE69_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00F15E2_CAFE_0AB4_41A5_E11499F7BE69_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00F15E2_CAFE_0AB4_41A5_E11499F7BE69_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00F15E2_CAFE_0AB4_41A5_E11499F7BE69_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00F15E2_CAFE_0AB4_41A5_E11499F7BE69_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00F15E2_CAFE_0AB4_41A5_E11499F7BE69_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C00F15E2_CAFE_0AB4_41A5_E11499F7BE69_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "150%",
 "label": "PA-002",
 "id": "panorama_C00F15E2_CAFE_0AB4_41A5_E11499F7BE69",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C00F15E2_CAFE_0AB4_41A5_E11499F7BE69_t.jpg"
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "GA-002",
 "id": "album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_3",
 "width": 1536,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_3.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_3_t.png",
 "height": 1024
},
{
 "class": "PhotoAlbum",
 "id": "album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE",
 "playList": "this.album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_AlbumPlayList",
 "label": "Photo Album BD-001",
 "thumbnailUrl": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_t.png"
},
{
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C00F1280_CAFE_0974_41E1_D5EC7DCC1C76_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C9982_CAFE_1B75_41E3_B0D6588CCBA6_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C9982_CAFE_1B75_41E3_B0D6588CCBA6_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C9982_CAFE_1B75_41E3_B0D6588CCBA6_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C9982_CAFE_1B75_41E3_B0D6588CCBA6_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C9982_CAFE_1B75_41E3_B0D6588CCBA6_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C9982_CAFE_1B75_41E3_B0D6588CCBA6_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C9982_CAFE_1B75_41E3_B0D6588CCBA6_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C9982_CAFE_1B75_41E3_B0D6588CCBA6_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C9982_CAFE_1B75_41E3_B0D6588CCBA6_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C9982_CAFE_1B75_41E3_B0D6588CCBA6_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C9982_CAFE_1B75_41E3_B0D6588CCBA6_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C9982_CAFE_1B75_41E3_B0D6588CCBA6_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C00C9982_CAFE_1B75_41E3_B0D6588CCBA6_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "150%",
 "label": "INT-002",
 "id": "panorama_C00C9982_CAFE_1B75_41E3_B0D6588CCBA6",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C00C9982_CAFE_1B75_41E3_B0D6588CCBA6_t.jpg"
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "PA-002",
 "id": "album_D64A0276_CB2A_099C_41D9_95CDF4606B08_11",
 "width": 1536,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_11.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_11_t.png",
 "height": 1024
},
{
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C00E3EF7_CAFE_369B_41DC_A92D30AFED02_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C00CACAA_CAFE_3AB5_41E8_74799C0B547B_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00E3EF7_CAFE_369B_41DC_A92D30AFED02_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00E3EF7_CAFE_369B_41DC_A92D30AFED02_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00E3EF7_CAFE_369B_41DC_A92D30AFED02_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00E3EF7_CAFE_369B_41DC_A92D30AFED02_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00E3EF7_CAFE_369B_41DC_A92D30AFED02_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00E3EF7_CAFE_369B_41DC_A92D30AFED02_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00E3EF7_CAFE_369B_41DC_A92D30AFED02_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00E3EF7_CAFE_369B_41DC_A92D30AFED02_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00E3EF7_CAFE_369B_41DC_A92D30AFED02_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00E3EF7_CAFE_369B_41DC_A92D30AFED02_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00E3EF7_CAFE_369B_41DC_A92D30AFED02_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00E3EF7_CAFE_369B_41DC_A92D30AFED02_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C00E3EF7_CAFE_369B_41DC_A92D30AFED02_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "150%",
 "label": "SI-002",
 "id": "panorama_C00E3EF7_CAFE_369B_41DC_A92D30AFED02",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C00E3EF7_CAFE_369B_41DC_A92D30AFED02_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00E1733_CAFE_179B_41E3_F31BC8F54472_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00E1733_CAFE_179B_41E3_F31BC8F54472_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00E1733_CAFE_179B_41E3_F31BC8F54472_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00E1733_CAFE_179B_41E3_F31BC8F54472_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00E1733_CAFE_179B_41E3_F31BC8F54472_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00E1733_CAFE_179B_41E3_F31BC8F54472_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00E1733_CAFE_179B_41E3_F31BC8F54472_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00E1733_CAFE_179B_41E3_F31BC8F54472_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00E1733_CAFE_179B_41E3_F31BC8F54472_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00E1733_CAFE_179B_41E3_F31BC8F54472_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00E1733_CAFE_179B_41E3_F31BC8F54472_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00E1733_CAFE_179B_41E3_F31BC8F54472_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C00E1733_CAFE_179B_41E3_F31BC8F54472_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "150%",
 "label": "INT-001",
 "id": "panorama_C00E1733_CAFE_179B_41E3_F31BC8F54472",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C00E1733_CAFE_179B_41E3_F31BC8F54472_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C4E93_CAFE_169B_41D1_FB1A4C18D620_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C4E93_CAFE_169B_41D1_FB1A4C18D620_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C4E93_CAFE_169B_41D1_FB1A4C18D620_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C4E93_CAFE_169B_41D1_FB1A4C18D620_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C4E93_CAFE_169B_41D1_FB1A4C18D620_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C4E93_CAFE_169B_41D1_FB1A4C18D620_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C4E93_CAFE_169B_41D1_FB1A4C18D620_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C4E93_CAFE_169B_41D1_FB1A4C18D620_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C4E93_CAFE_169B_41D1_FB1A4C18D620_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C4E93_CAFE_169B_41D1_FB1A4C18D620_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00C4E93_CAFE_169B_41D1_FB1A4C18D620_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00C4E93_CAFE_169B_41D1_FB1A4C18D620_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C00C4E93_CAFE_169B_41D1_FB1A4C18D620_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "150%",
 "label": "INT-004",
 "id": "panorama_C00C4E93_CAFE_169B_41D1_FB1A4C18D620",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C00C4E93_CAFE_169B_41D1_FB1A4C18D620_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00E884B_CAFE_198B_41D6_F49862232C6F_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00E884B_CAFE_198B_41D6_F49862232C6F_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00E884B_CAFE_198B_41D6_F49862232C6F_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00E884B_CAFE_198B_41D6_F49862232C6F_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00E884B_CAFE_198B_41D6_F49862232C6F_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00E884B_CAFE_198B_41D6_F49862232C6F_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00E884B_CAFE_198B_41D6_F49862232C6F_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00E884B_CAFE_198B_41D6_F49862232C6F_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00E884B_CAFE_198B_41D6_F49862232C6F_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00E884B_CAFE_198B_41D6_F49862232C6F_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00E884B_CAFE_198B_41D6_F49862232C6F_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00E884B_CAFE_198B_41D6_F49862232C6F_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C00E884B_CAFE_198B_41D6_F49862232C6F_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "150%",
 "label": "SW-002",
 "id": "panorama_C00E884B_CAFE_198B_41D6_F49862232C6F",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C00E884B_CAFE_198B_41D6_F49862232C6F_t.jpg"
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "GA-001",
 "id": "album_D64A0276_CB2A_099C_41D9_95CDF4606B08_2",
 "width": 1536,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_2.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_2_t.png",
 "height": 1024
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00F95FC_CAFE_0A8D_41C3_BFECC4C4CEB1_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00F95FC_CAFE_0A8D_41C3_BFECC4C4CEB1_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00F95FC_CAFE_0A8D_41C3_BFECC4C4CEB1_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00F95FC_CAFE_0A8D_41C3_BFECC4C4CEB1_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00F95FC_CAFE_0A8D_41C3_BFECC4C4CEB1_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00F95FC_CAFE_0A8D_41C3_BFECC4C4CEB1_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00F95FC_CAFE_0A8D_41C3_BFECC4C4CEB1_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00F95FC_CAFE_0A8D_41C3_BFECC4C4CEB1_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00F95FC_CAFE_0A8D_41C3_BFECC4C4CEB1_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00F95FC_CAFE_0A8D_41C3_BFECC4C4CEB1_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00F95FC_CAFE_0A8D_41C3_BFECC4C4CEB1_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00F95FC_CAFE_0A8D_41C3_BFECC4C4CEB1_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C00F95FC_CAFE_0A8D_41C3_BFECC4C4CEB1_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "150%",
 "label": "SW-001",
 "id": "panorama_C00F95FC_CAFE_0A8D_41C3_BFECC4C4CEB1",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C00F95FC_CAFE_0A8D_41C3_BFECC4C4CEB1_t.jpg"
},
{
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C00C0A73_CAFE_399B_41E8_9A1C4887C0E0_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00FF328_CAFE_0FB5_41D6_02DAD7C93E72_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00FF328_CAFE_0FB5_41D6_02DAD7C93E72_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00FF328_CAFE_0FB5_41D6_02DAD7C93E72_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00FF328_CAFE_0FB5_41D6_02DAD7C93E72_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00FF328_CAFE_0FB5_41D6_02DAD7C93E72_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00FF328_CAFE_0FB5_41D6_02DAD7C93E72_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00FF328_CAFE_0FB5_41D6_02DAD7C93E72_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00FF328_CAFE_0FB5_41D6_02DAD7C93E72_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00FF328_CAFE_0FB5_41D6_02DAD7C93E72_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00FF328_CAFE_0FB5_41D6_02DAD7C93E72_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00FF328_CAFE_0FB5_41D6_02DAD7C93E72_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00FF328_CAFE_0FB5_41D6_02DAD7C93E72_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C00FF328_CAFE_0FB5_41D6_02DAD7C93E72_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "150%",
 "label": "PA-001",
 "id": "panorama_C00FF328_CAFE_0FB5_41D6_02DAD7C93E72",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C00FF328_CAFE_0FB5_41D6_02DAD7C93E72_t.jpg"
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "PA-001",
 "id": "album_D64A0276_CB2A_099C_41D9_95CDF4606B08_10",
 "width": 1536,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_10.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_10_t.png",
 "height": 1024
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "INT-002",
 "id": "album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_6",
 "width": 1672,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_6.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_6_t.png",
 "height": 941
},
{
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C00FF328_CAFE_0FB5_41D6_02DAD7C93E72_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C00C582F_CAFE_398B_41E0_677B89AC7EF4_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "SI-003",
 "id": "album_D64A0276_CB2A_099C_41D9_95CDF4606B08_16",
 "width": 1536,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_16.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_16_t.png",
 "height": 1024
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "BD-002",
 "id": "photo_D3343094_CB1A_0A9C_41E7_A5DB841A7F2F",
 "width": 1536,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_D3343094_CB1A_0A9C_41E7_A5DB841A7F2F.png"
   }
  ]
 },
 "thumbnailUrl": "media/photo_D3343094_CB1A_0A9C_41E7_A5DB841A7F2F_t.png",
 "height": 1024
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "SI-001",
 "id": "album_D64A0276_CB2A_099C_41D9_95CDF4606B08_14",
 "width": 1536,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_14.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_14_t.png",
 "height": 1024
},
{
 "mouseControlMode": "drag_acceleration",
 "buttonCardboardView": [
  "this.IconButton_66589837_74AF_8B56_41D7_A6F4FAC02CC3",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "viewerArea": "this.MainViewer",
 "buttonToggleGyroscope": [
  "this.IconButton_6658D838_74AF_8B5A_41D7_154D466041BB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A"
 ],
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "buttonToggleHotspots": [
  "this.IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96"
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C008C163_CAFE_0BBB_41D9_5AD1ECA55545_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00CACAA_CAFE_3AB5_41E8_74799C0B547B_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00CACAA_CAFE_3AB5_41E8_74799C0B547B_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00CACAA_CAFE_3AB5_41E8_74799C0B547B_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00CACAA_CAFE_3AB5_41E8_74799C0B547B_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00CACAA_CAFE_3AB5_41E8_74799C0B547B_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00CACAA_CAFE_3AB5_41E8_74799C0B547B_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00CACAA_CAFE_3AB5_41E8_74799C0B547B_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00CACAA_CAFE_3AB5_41E8_74799C0B547B_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00CACAA_CAFE_3AB5_41E8_74799C0B547B_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00CACAA_CAFE_3AB5_41E8_74799C0B547B_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00CACAA_CAFE_3AB5_41E8_74799C0B547B_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00CACAA_CAFE_3AB5_41E8_74799C0B547B_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C00CACAA_CAFE_3AB5_41E8_74799C0B547B_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "150%",
 "label": "SI-001",
 "id": "panorama_C00CACAA_CAFE_3AB5_41E8_74799C0B547B",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C00CACAA_CAFE_3AB5_41E8_74799C0B547B_t.jpg"
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "SW-001",
 "id": "album_D64A0276_CB2A_099C_41D9_95CDF4606B08_18",
 "width": 1536,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_18.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_18_t.png",
 "height": 1024
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00EE3B4_CAFE_0E9D_41E6_13CC33F84A46_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00EE3B4_CAFE_0E9D_41E6_13CC33F84A46_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00EE3B4_CAFE_0E9D_41E6_13CC33F84A46_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00EE3B4_CAFE_0E9D_41E6_13CC33F84A46_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00EE3B4_CAFE_0E9D_41E6_13CC33F84A46_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00EE3B4_CAFE_0E9D_41E6_13CC33F84A46_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00EE3B4_CAFE_0E9D_41E6_13CC33F84A46_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00EE3B4_CAFE_0E9D_41E6_13CC33F84A46_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00EE3B4_CAFE_0E9D_41E6_13CC33F84A46_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00EE3B4_CAFE_0E9D_41E6_13CC33F84A46_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C00EE3B4_CAFE_0E9D_41E6_13CC33F84A46_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C00EE3B4_CAFE_0E9D_41E6_13CC33F84A46_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C00EE3B4_CAFE_0E9D_41E6_13CC33F84A46_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "150%",
 "label": "SI-004",
 "id": "panorama_C00EE3B4_CAFE_0E9D_41E6_13CC33F84A46",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C00EE3B4_CAFE_0E9D_41E6_13CC33F84A46_t.jpg"
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "INT-003",
 "id": "album_D64A0276_CB2A_099C_41D9_95CDF4606B08_7",
 "width": 1619,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_7.png"
   }
  ]
 },
 "thumbnailUrl": "media/album_D64A0276_CB2A_099C_41D9_95CDF4606B08_7_t.png",
 "height": 971
},
{
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "playbackBarHeadShadowColor": "#000000",
 "progressOpacity": 1,
 "progressRight": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressBarBackgroundColorDirection": "vertical",
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "width": "100%",
 "minHeight": 50,
 "borderSize": 0,
 "playbackBarHeadShadow": true,
 "displayTooltipInTouchScreens": true,
 "toolTipFontColor": "#FFFFFF",
 "progressBottom": 0,
 "playbackBarOpacity": 1,
 "toolTipBackgroundColor": "#000000",
 "progressBackgroundOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "minWidth": 100,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "vrPointerColor": "#FFFFFF",
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "playbackBarBorderColor": "#FFFFFF",
 "height": "100%",
 "progressBorderRadius": 0,
 "class": "ViewerArea",
 "toolTipPaddingRight": 10,
 "shadow": false,
 "toolTipPaddingLeft": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "transitionDuration": 500,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "top": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "transitionMode": "blending",
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1
},
{
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543"
 ],
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "left": "0%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "width": 330,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "top": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "height": "100%",
 "class": "Container",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "borderRadius": 0,
 "paddingTop": 0,
 "data": {
  "name": "--- LEFT PANEL 2"
 },
 "propagateClick": false
},
{
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "right": "0%",
 "width": 115.05,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "top": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "height": 641,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "-- SETTINGS"
 },
 "propagateClick": true
},
{
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83"
 ],
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "width": 550,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "top": 34,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "height": 140,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "borderRadius": 0,
 "data": {
  "name": "--STICKER"
 },
 "propagateClick": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_BD141CC8_9478_145B_41D4_265F47E47DB6",
 "left": "0%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.Container_BD15DCC8_9478_145B_41E1_35766BBBD98F",
  "this.Container_BD147CC8_9478_145B_41E1_A1505134A3C3"
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "click": "this.setComponentVisibility(this.Container_BD141CC8_9478_145B_41D4_265F47E47DB6, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "class": "Container",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "borderRadius": 0,
 "data": {
  "name": "--DASHBOARD"
 },
 "propagateClick": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "class": "Container",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "borderRadius": 0,
 "data": {
  "name": "--DAFTAR ASET"
 },
 "propagateClick": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "class": "Container",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "borderRadius": 0,
 "data": {
  "name": "--LOCATION"
 },
 "propagateClick": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "class": "Container",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "borderRadius": 0,
 "data": {
  "name": "--FLOORPLAN"
 },
 "propagateClick": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "class": "Container",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "borderRadius": 0,
 "data": {
  "name": "--KONDISI ASET"
 },
 "propagateClick": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_BD84EAD4_9478_3C4B_41C0_BDBA5096F748",
 "left": "0%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.Container_BD878AD4_9478_3C4B_41E0_1542ED46C5EC",
  "this.Container_BD84CAD4_9478_3C4B_41DB_EAABF4EA300E"
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "click": "this.setComponentVisibility(this.Container_BD84EAD4_9478_3C4B_41C0_BDBA5096F748, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "class": "Container",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "borderRadius": 0,
 "data": {
  "name": "--INFORMASI"
 },
 "propagateClick": true
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "width": 30,
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "height": 30,
 "horizontalAlign": "center",
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE_pressed.png",
 "backgroundOpacity": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "IconButton Sound"
 },
 "iconURL": "skin/IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE.png",
 "cursor": "hand",
 "propagateClick": false
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "width": 58,
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "height": 58,
 "horizontalAlign": "center",
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "backgroundOpacity": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "cursor": "hand",
 "propagateClick": true
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "width": 30,
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "height": 30,
 "horizontalAlign": "center",
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57_pressed.png",
 "backgroundOpacity": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "IconButton Fullscreen"
 },
 "iconURL": "skin/IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57.png",
 "cursor": "hand",
 "propagateClick": false
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "width": 58,
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "height": 58,
 "horizontalAlign": "center",
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "backgroundOpacity": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "cursor": "hand",
 "propagateClick": true
},
{
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "playbackBarHeadShadowColor": "#000000",
 "progressOpacity": 1,
 "progressRight": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressBarBackgroundColorDirection": "vertical",
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "width": "49.5%",
 "minHeight": 1,
 "borderSize": 0,
 "playbackBarHeadShadow": true,
 "displayTooltipInTouchScreens": true,
 "toolTipFontColor": "#606060",
 "progressBottom": 2,
 "playbackBarOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBackgroundOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "minWidth": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "vrPointerColor": "#FFFFFF",
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#FFFFFF",
 "height": "100%",
 "progressBorderRadius": 0,
 "class": "ViewerArea",
 "toolTipPaddingRight": 6,
 "shadow": false,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "transitionDuration": 0,
 "show": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_E7B29825_CB1A_79BF_41D7_972EE9B00893.set('selectedIndex', -1); }, this); this.playList_E7B29825_CB1A_79BF_41D7_972EE9B00893.set('selectedIndex', 0)",
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowHorizontalLength": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "top": "0%",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "transitionMode": "fade_out_fade_in",
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarProgressOpacity": 1,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "width": "14.22%",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "minHeight": 50,
 "borderSize": 0,
 "top": "20%",
 "minWidth": 50,
 "bottom": "20%",
 "horizontalAlign": "center",
 "mode": "push",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "transparencyActive": false,
 "shadow": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "IconButton <"
 },
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "propagateClick": true
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "right": 10,
 "width": "14.22%",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "verticalAlign": "middle",
 "minHeight": 50,
 "borderSize": 0,
 "top": "20%",
 "minWidth": 50,
 "horizontalAlign": "center",
 "bottom": "20%",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "mode": "push",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "transparencyActive": false,
 "shadow": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "IconButton >"
 },
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "propagateClick": true
},
{
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "id": "ViewerAreaLabeled_D7B00FFE_CB2A_168C_41B0_D8CB0C528331",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "progressOpacity": 1,
 "right": "0.01%",
 "progressRight": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressBarBackgroundColorDirection": "vertical",
 "vrPointerSelectionTime": 2000,
 "firstTransitionDuration": 0,
 "width": "49.5%",
 "minHeight": 1,
 "borderSize": 0,
 "playbackBarHeadShadow": true,
 "displayTooltipInTouchScreens": true,
 "toolTipFontColor": "#606060",
 "progressBottom": 2,
 "playbackBarOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBackgroundOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "minWidth": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "vrPointerColor": "#FFFFFF",
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "playbackBarBorderColor": "#FFFFFF",
 "height": "100%",
 "progressBorderRadius": 0,
 "class": "ViewerArea",
 "toolTipPaddingTop": 4,
 "shadow": false,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "transitionDuration": 0,
 "show": "this.ViewerAreaLabeled_D7B00FFE_CB2A_168C_41B0_D8CB0C528331.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_E7B21825_CB1A_79BF_41D8_C5846AD14979.set('selectedIndex', -1); }, this); this.playList_E7B21825_CB1A_79BF_41D8_C5846AD14979.set('selectedIndex', 0)",
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowHorizontalLength": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "top": "0%",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "transitionMode": "fade_out_fade_in",
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarProgressOpacity": 1,
 "data": {
  "name": "Viewer 4"
 },
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1
},
{
 "items": [
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.65",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.36"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D64A0276_CB2A_099C_41D9_95CDF4606B08_0",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.27",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.49"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D64A0276_CB2A_099C_41D9_95CDF4606B08_1",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.72",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.27"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D64A0276_CB2A_099C_41D9_95CDF4606B08_2",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.48",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.35"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D64A0276_CB2A_099C_41D9_95CDF4606B08_3",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.27",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.44"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D64A0276_CB2A_099C_41D9_95CDF4606B08_4",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.39",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.54"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D64A0276_CB2A_099C_41D9_95CDF4606B08_5",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.73",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.40"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D64A0276_CB2A_099C_41D9_95CDF4606B08_6",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.58",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.60"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D64A0276_CB2A_099C_41D9_95CDF4606B08_7",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.43",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.45"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D64A0276_CB2A_099C_41D9_95CDF4606B08_8",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.57",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.38"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D64A0276_CB2A_099C_41D9_95CDF4606B08_9",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.62",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.31"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D64A0276_CB2A_099C_41D9_95CDF4606B08_10",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.67",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.59"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D64A0276_CB2A_099C_41D9_95CDF4606B08_11",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.73",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.35"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D64A0276_CB2A_099C_41D9_95CDF4606B08_12",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.48",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.49"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D64A0276_CB2A_099C_41D9_95CDF4606B08_13",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.33",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.71"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D64A0276_CB2A_099C_41D9_95CDF4606B08_14",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.49",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.63"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D64A0276_CB2A_099C_41D9_95CDF4606B08_15",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.43",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.29"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D64A0276_CB2A_099C_41D9_95CDF4606B08_16",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.66",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.61"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D64A0276_CB2A_099C_41D9_95CDF4606B08_17",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.38",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.35"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D64A0276_CB2A_099C_41D9_95CDF4606B08_18",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.53",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.59"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D64A0276_CB2A_099C_41D9_95CDF4606B08_19",
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_D64A0276_CB2A_099C_41D9_95CDF4606B08_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "items": [
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.46",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.39"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_0",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.33",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_1",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.52",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.47"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_2",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.44",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.51"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_3",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.27",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.68"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_4",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.36",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.69"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_5",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.69",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.52"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_6",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.28",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.32"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_7",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.27",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.59"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_8",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.56",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.51"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_9",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.56",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.60"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_10",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.56",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.74"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_11",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.73",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.48"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_12",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.40",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.31"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_13",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.28",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.38"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_14",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.70",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.61"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_15",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.52",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.42"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_16",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.60",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_17",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.38",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.72"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_18",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.58",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.27"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_19",
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_D2F4B10D_CB1A_0B8F_41E8_6226608BE9DE_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_66589837_74AF_8B56_41D7_A6F4FAC02CC3",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "width": 30,
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "height": 30,
 "horizontalAlign": "center",
 "mode": "push",
 "backgroundOpacity": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "IconButton VR"
 },
 "iconURL": "skin/IconButton_66589837_74AF_8B56_41D7_A6F4FAC02CC3.png",
 "cursor": "hand",
 "propagateClick": false
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "width": 58,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "height": 58,
 "horizontalAlign": "center",
 "mode": "push",
 "backgroundOpacity": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "visible": false,
 "borderRadius": 0,
 "data": {
  "name": "IconButton VR"
 },
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "cursor": "hand",
 "propagateClick": true
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_6658D838_74AF_8B5A_41D7_154D466041BB",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "width": 34,
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "height": 34,
 "horizontalAlign": "center",
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_6658D838_74AF_8B5A_41D7_154D466041BB_pressed.png",
 "backgroundOpacity": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "IconButton Gyroscopic"
 },
 "iconURL": "skin/IconButton_6658D838_74AF_8B5A_41D7_154D466041BB.png",
 "cursor": "hand",
 "propagateClick": false
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "width": 58,
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "height": 58,
 "horizontalAlign": "center",
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "backgroundOpacity": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "cursor": "hand",
 "propagateClick": true
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "width": 30,
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "height": 30,
 "horizontalAlign": "center",
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4_pressed.png",
 "backgroundOpacity": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "IconButton Hs visibility"
 },
 "iconURL": "skin/IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4.png",
 "cursor": "hand",
 "propagateClick": false
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "width": 58,
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "height": 58,
 "horizontalAlign": "center",
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "backgroundOpacity": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "IconButton HS "
 },
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "cursor": "hand",
 "propagateClick": true
},
{
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "left": "0%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "width": 66,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "top": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "height": "100%",
 "class": "Container",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "- COLLAPSE"
 },
 "propagateClick": true
},
{
 "children": [
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "id": "Container_6396DD92_74B8_852E_41C7_7F2F88EAB543",
 "left": "0%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "top": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "height": "100%",
 "class": "Container",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "borderRadius": 0,
 "paddingTop": 0,
 "data": {
  "name": "- EXPANDED"
 },
 "propagateClick": false
},
{
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "right": "0%",
 "width": 110,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "top": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "height": 110,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "button menu sup"
 },
 "propagateClick": true
},
{
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "right": "0%",
 "width": "91.304%",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "layout": "vertical",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "bottom": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "gap": 3,
 "height": "85.959%",
 "class": "Container",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "-button set"
 },
 "propagateClick": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8"
 ],
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "width": 298.7,
 "layout": "absolute",
 "shadowColor": "#000000",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "top": 2,
 "height": 46,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "shadowBlurRadius": 8,
 "gap": 10,
 "shadowSpread": 1,
 "horizontalAlign": "left",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "backgroundOpacity": 0.5,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "contentOpaque": false,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "white block"
 },
 "propagateClick": true,
 "shadowVerticalLength": 0
},
{
 "fontFamily": "Oswald",
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "left": 10,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "width": 261.7,
 "minHeight": 1,
 "borderSize": 0,
 "text": "Be-ARISE",
 "top": 0,
 "minWidth": 1,
 "fontColor": "#000000",
 "height": 44.35,
 "fontSize": "36px",
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "class": "Label",
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "text 1"
 },
 "textDecoration": "none",
 "propagateClick": true,
 "fontWeight": "bold"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_BD15ECC8_9478_145B_41CB_7D871BE75B47",
  "this.Container_BD158CC8_9478_145B_41B5_3F260A00D36A"
 ],
 "id": "Container_BD15DCC8_9478_145B_41E1_35766BBBD98F",
 "left": "15%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "right": "15%",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "top": "10%",
 "bottom": "10%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "shadowBlurRadius": 25,
 "gap": 10,
 "shadowSpread": 1,
 "horizontalAlign": "left",
 "shadowHorizontalLength": 0,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadow": true,
 "contentOpaque": false,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "Global"
 },
 "propagateClick": false,
 "shadowVerticalLength": 0
},
{
 "id": "Container_BD147CC8_9478_145B_41E1_A1505134A3C3",
 "left": "15%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 20,
 "right": "15%",
 "children": [
  "this.IconButton_BD140CC8_9478_145B_41BD_F96EEC163BAF"
 ],
 "layout": "vertical",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "top": "10%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "bottom": "80%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "gap": 10,
 "class": "Container",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "borderRadius": 0,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "right": "15%",
 "layout": "absolute",
 "shadowColor": "#000000",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "top": "10%",
 "bottom": "10%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "shadowBlurRadius": 25,
 "gap": 10,
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "shadowHorizontalLength": 0,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadow": true,
 "contentOpaque": false,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "Global"
 },
 "propagateClick": false,
 "shadowVerticalLength": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "right": "15%",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "top": "10%",
 "bottom": "10%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "shadowBlurRadius": 25,
 "gap": 10,
 "shadowSpread": 1,
 "horizontalAlign": "left",
 "shadowHorizontalLength": 0,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadow": true,
 "contentOpaque": false,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "Global"
 },
 "propagateClick": false,
 "shadowVerticalLength": 0
},
{
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 20,
 "right": "15%",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "layout": "vertical",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "top": "10%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "bottom": "80%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "gap": 10,
 "class": "Container",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 20,
 "borderRadius": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "right": "15%",
 "layout": "absolute",
 "shadowColor": "#000000",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "top": "10%",
 "bottom": "10%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "shadowBlurRadius": 25,
 "gap": 10,
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "shadowHorizontalLength": 0,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadow": true,
 "contentOpaque": false,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "Global"
 },
 "propagateClick": false,
 "shadowVerticalLength": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "right": "15%",
 "layout": "vertical",
 "shadowColor": "#000000",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "top": "10%",
 "bottom": "10%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "shadowBlurRadius": 25,
 "gap": 10,
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "shadowHorizontalLength": 0,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadow": true,
 "contentOpaque": false,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "Global"
 },
 "propagateClick": false,
 "shadowVerticalLength": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_BD87BAD4_9478_3C4B_41D2_A8D83FD6CFF3",
  "this.Container_BD875AD4_9478_3C4B_4145_58969FE396D8"
 ],
 "id": "Container_BD878AD4_9478_3C4B_41E0_1542ED46C5EC",
 "left": "15%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "right": "15%",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "top": "10%",
 "bottom": "10%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "shadowBlurRadius": 25,
 "gap": 10,
 "shadowSpread": 1,
 "horizontalAlign": "left",
 "shadowHorizontalLength": 0,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadow": true,
 "contentOpaque": false,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "Global"
 },
 "propagateClick": false,
 "shadowVerticalLength": 0
},
{
 "id": "Container_BD84CAD4_9478_3C4B_41DB_EAABF4EA300E",
 "left": "15%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 20,
 "right": "15%",
 "children": [
  "this.IconButton_BD84FAD4_9478_3C4B_41DD_83E1298704B1"
 ],
 "layout": "vertical",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "top": "10%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "bottom": "80%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "gap": 10,
 "class": "Container",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "borderRadius": 0,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "left": "0%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "width": 36,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "class": "Container",
 "backgroundOpacity": 0.4,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "Container black"
 },
 "propagateClick": true
},
{
 "cursor": "hand",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "left": 10,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "width": 44,
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "minHeight": 1,
 "borderSize": 0,
 "top": "40%",
 "minWidth": 1,
 "bottom": "40%",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "mode": "push",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "transparencyActive": true,
 "shadow": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "propagateClick": true
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "left": "0%",
 "paddingLeft": 40,
 "paddingBottom": 40,
 "paddingRight": 40,
 "verticalAlign": "top",
 "width": 300,
 "children": [
  "this.Image_DA3B1482_CAF6_0975_41E6_EEB7357A523A",
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479"
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "class": "Container",
 "backgroundOpacity": 0.7,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 40,
 "borderRadius": 0,
 "data": {
  "name": "Container"
 },
 "propagateClick": true
},
{
 "cursor": "hand",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "right": 9,
 "width": 44,
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "verticalAlign": "middle",
 "minHeight": 1,
 "borderSize": 0,
 "top": "40%",
 "minWidth": 1,
 "bottom": "40%",
 "click": "this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "mode": "push",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "transparencyActive": true,
 "shadow": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "IconButton collapse"
 },
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "propagateClick": true
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "width": 60,
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "horizontalAlign": "center",
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "backgroundOpacity": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "image button menu"
 },
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "cursor": "hand",
 "propagateClick": true
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "width": 58,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "height": 58,
 "click": "this.shareTwitter(window.location.href)",
 "horizontalAlign": "center",
 "mode": "push",
 "backgroundOpacity": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "IconButton TWITTER"
 },
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "cursor": "hand",
 "propagateClick": true
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "width": 58,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "height": 58,
 "click": "this.shareFacebook(window.location.href)",
 "horizontalAlign": "center",
 "mode": "push",
 "backgroundOpacity": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "shadow": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "IconButton FB"
 },
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "cursor": "hand",
 "propagateClick": true
},
{
 "fontFamily": "Oswald",
 "id": "Label_22BB32F4_3075_D173_4191_C8B45B85DEB8",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "right": 10.35,
 "width": 135,
 "verticalAlign": "top",
 "minHeight": 1,
 "borderSize": 0,
 "text": "Virtual Tour",
 "minWidth": 1,
 "bottom": 0,
 "fontColor": "#004BA9",
 "height": 31.35,
 "fontSize": "20px",
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "class": "Label",
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingTop": 0,
 "textDecoration": "none",
 "borderRadius": 0,
 "data": {
  "name": "text 2"
 },
 "propagateClick": true,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "Container_BD15ECC8_9478_145B_41CB_7D871BE75B47",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "width": "85%",
 "children": [
  "this.Image_BD15FCC8_9478_145B_41DA_B306F52E3FCF"
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "class": "Container",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "borderRadius": 0,
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_BD158CC8_9478_145B_41B5_3F260A00D36A",
 "paddingLeft": 50,
 "paddingBottom": 20,
 "paddingRight": 50,
 "verticalAlign": "top",
 "width": "50%",
 "children": [
  "this.Container_BD159CC8_9478_145B_41AA_EFEDE92BF07B",
  "this.Container_BD15ACC8_9478_145B_41C2_6D37AD97A48D",
  "this.Container_BD146CC8_9478_145B_41D1_ED9BAFE44A6B"
 ],
 "layout": "vertical",
 "scrollBarWidth": 10,
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 460,
 "scrollBarColor": "#0069A3",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 0,
 "scrollBarOpacity": 0.51,
 "height": "100%",
 "class": "Container",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "borderRadius": 0,
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "propagateClick": false
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_BD140CC8_9478_145B_41BD_F96EEC163BAF",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "width": "25%",
 "rollOverIconURL": "skin/IconButton_BD140CC8_9478_145B_41BD_F96EEC163BAF_rollover.jpg",
 "minHeight": 50,
 "borderSize": 0,
 "minWidth": 50,
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_BD141CC8_9478_145B_41D4_265F47E47DB6, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "mode": "push",
 "pressedIconURL": "skin/IconButton_BD140CC8_9478_145B_41BD_F96EEC163BAF_pressed.jpg",
 "backgroundOpacity": 0,
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "borderRadius": 0,
 "pressedRollOverIconURL": "skin/IconButton_BD140CC8_9478_145B_41BD_F96EEC163BAF_pressed_rollover.jpg",
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "iconURL": "skin/IconButton_BD140CC8_9478_145B_41BD_F96EEC163BAF.jpg",
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "width": "100%",
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "height": 140,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "header"
 },
 "propagateClick": false
},
{
 "itemVerticalAlign": "top",
 "selectedItemLabelFontWeight": "bold",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "paddingLeft": 70,
 "paddingBottom": 70,
 "scrollBarWidth": 10,
 "itemLabelFontColor": "#666666",
 "verticalAlign": "middle",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundColorDirection": "vertical",
 "itemLabelGap": 7,
 "width": "100%",
 "minHeight": 1,
 "borderSize": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemThumbnailHeight": 125,
 "itemPaddingBottom": 3,
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "itemMode": "normal",
 "itemLabelFontStyle": "italic",
 "scrollBarOpacity": 0.5,
 "itemOpacity": 1,
 "scrollBarVisible": "rollOver",
 "gap": 26,
 "itemMaxWidth": 1000,
 "itemLabelHorizontalAlign": "center",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "height": "92%",
 "itemLabelFontFamily": "Oswald",
 "class": "ThumbnailGrid",
 "itemThumbnailWidth": 220,
 "itemMaxHeight": 1000,
 "shadow": false,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemBorderRadius": 0,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "borderRadius": 5,
 "itemHorizontalAlign": "center",
 "paddingTop": 10,
 "itemPaddingLeft": 3,
 "selectedItemThumbnailShadow": true,
 "itemLabelPosition": "bottom",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemThumbnailShadow": false,
 "paddingRight": 70,
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemPaddingTop": 3,
 "itemWidth": 220,
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "bottom": -0.2,
 "itemThumbnailOpacity": 1,
 "horizontalAlign": "center",
 "itemMinHeight": 50,
 "itemPaddingRight": 3,
 "itemLabelTextDecoration": "none",
 "itemLabelFontWeight": "normal",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "rollOverItemThumbnailShadow": true,
 "itemHeight": 160,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 16,
 "data": {
  "name": "ThumbnailList"
 },
 "itemMinWidth": 50,
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "width": "100%",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "class": "WebFrame",
 "backgroundOpacity": 1,
 "shadow": false,
 "borderRadius": 0,
 "scrollEnabled": true,
 "paddingTop": 0,
 "data": {
  "name": "WebFrame48191"
 },
 "insetBorder": false,
 "propagateClick": false
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "width": "25%",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "minHeight": 50,
 "borderSize": 0,
 "minWidth": 50,
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "mode": "push",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "backgroundOpacity": 0,
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "borderRadius": 0,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "propagateClick": false
},
{
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "id": "MapViewer",
 "left": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "playbackBarHeadShadowColor": "#000000",
 "progressOpacity": 1,
 "progressRight": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressBarBackgroundColorDirection": "vertical",
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "width": "100%",
 "minHeight": 1,
 "borderSize": 0,
 "playbackBarHeadShadow": true,
 "displayTooltipInTouchScreens": true,
 "toolTipFontColor": "#606060",
 "progressBottom": 2,
 "playbackBarOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBackgroundOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "minWidth": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "vrPointerColor": "#FFFFFF",
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#FFFFFF",
 "height": "99.975%",
 "progressBorderRadius": 0,
 "class": "ViewerArea",
 "toolTipPaddingRight": 6,
 "shadow": false,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "transitionDuration": 500,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowHorizontalLength": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "top": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "transitionMode": "blending",
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1
},
{
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "verticalAlign": "top",
 "width": "100%",
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "height": 140,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "header"
 },
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "width": "100%",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.ViewerAreaLabeled_D7B00FFE_CB2A_168C_41B0_D8CB0C528331",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "height": "99.95%",
 "class": "Container",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "borderRadius": 0,
 "paddingTop": 0,
 "data": {
  "name": "Container photo"
 },
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "Container_BD87BAD4_9478_3C4B_41D2_A8D83FD6CFF3",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "width": "55%",
 "children": [
  "this.Image_BD87AAD4_9478_3C4B_41BE_0345EF6421AD"
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "class": "Container",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "borderRadius": 0,
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_BD875AD4_9478_3C4B_4145_58969FE396D8",
 "paddingLeft": 60,
 "paddingBottom": 20,
 "paddingRight": 60,
 "verticalAlign": "top",
 "width": "45%",
 "children": [
  "this.Container_BD874AD4_9478_3C4B_41DE_DE522887B2C7",
  "this.Container_BD877AD4_9478_3C4B_41AC_A13D39E1584C",
  "this.Container_BD84DAD4_9478_3C4B_41D9_38F6A3F8328B"
 ],
 "layout": "vertical",
 "scrollBarWidth": 10,
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 460,
 "scrollBarColor": "#0069A3",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 0,
 "scrollBarOpacity": 0.51,
 "height": "100%",
 "class": "Container",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "borderRadius": 0,
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "propagateClick": false
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_BD84FAD4_9478_3C4B_41DD_83E1298704B1",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "width": "25%",
 "rollOverIconURL": "skin/IconButton_BD84FAD4_9478_3C4B_41DD_83E1298704B1_rollover.jpg",
 "minHeight": 50,
 "borderSize": 0,
 "minWidth": 50,
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_BD84EAD4_9478_3C4B_41C0_BDBA5096F748, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "mode": "push",
 "pressedIconURL": "skin/IconButton_BD84FAD4_9478_3C4B_41DD_83E1298704B1_pressed.jpg",
 "backgroundOpacity": 0,
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "borderRadius": 0,
 "pressedRollOverIconURL": "skin/IconButton_BD84FAD4_9478_3C4B_41DD_83E1298704B1_pressed_rollover.jpg",
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "iconURL": "skin/IconButton_BD84FAD4_9478_3C4B_41DD_83E1298704B1.jpg",
 "propagateClick": false
},
{
 "maxHeight": 153,
 "maxWidth": 632,
 "id": "Image_DA3B1482_CAF6_0975_41E6_EEB7357A523A",
 "left": "0%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "width": "100%",
 "url": "skin/Image_DA3B1482_CAF6_0975_41E6_EEB7357A523A.png",
 "minHeight": 1,
 "borderSize": 0,
 "top": "0.11%",
 "minWidth": 1,
 "height": "22.121%",
 "horizontalAlign": "center",
 "class": "Image",
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image5353"
 },
 "propagateClick": false
},
{
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "right": "0%",
 "width": "100%",
 "children": [
  "this.Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
  "this.Button_7DB31382_7065_343F_41D6_641BBE1B2562",
  "this.Container_7DB30382_7065_343F_416C_8610BCBA9F50",
  "this.Button_7DB33382_7065_343F_41B1_0B0F019C1828",
  "this.Container_7DB32382_7065_343F_419E_6594814C420F",
  "this.Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
  "this.Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
  "this.Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
  "this.Container_7DBC9382_7065_343F_41CC_ED357655BB95",
  "this.Button_7DBC8382_7065_343F_4183_17B44518DB40",
  "this.Container_7DBCB382_7065_343F_41D8_AB382D384291",
  "this.Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
  "this.Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9"
 ],
 "layout": "vertical",
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "top": "25%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "bottom": "25%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "borderRadius": 0,
 "paddingTop": 0,
 "data": {
  "name": "-Container buttons"
 },
 "propagateClick": true
},
{
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "right": "0%",
 "width": "100%",
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.Container_66588837_74AF_8B56_41CA_E204728E8E6C",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1"
 ],
 "layout": "vertical",
 "scrollBarWidth": 10,
 "verticalAlign": "bottom",
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "bottom": "0%",
 "height": 120,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "-Container footer"
 },
 "propagateClick": true
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_BD15FCC8_9478_145B_41DA_B306F52E3FCF",
 "left": "0%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "width": "100%",
 "url": "skin/Image_BD15FCC8_9478_145B_41DA_B306F52E3FCF.jpg",
 "minHeight": 1,
 "borderSize": 0,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "horizontalAlign": "center",
 "class": "Image",
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_BD159CC8_9478_145B_41AA_EFEDE92BF07B",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "width": "100%",
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "gap": 0,
 "height": 50,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 20,
 "borderRadius": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_BD15ACC8_9478_145B_41C2_6D37AD97A48D",
 "paddingLeft": 0,
 "paddingBottom": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "width": "100%",
 "children": [
  "this.HTMLText_BD15BCC8_9478_145B_41A0_1BDCC9E92EE8",
  "this.Button_BD145CC8_9478_145B_41D6_359CB4C54BCA"
 ],
 "layout": "vertical",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 300,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 100,
 "scrollBarColor": "#E73B2C",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarOpacity": 0.79,
 "height": "100%",
 "class": "Container",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "borderRadius": 0,
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 },
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_BD146CC8_9478_145B_41D1_ED9BAFE44A6B",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "width": 370,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "height": 30,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "right": 20,
 "width": "100%",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "verticalAlign": "top",
 "minHeight": 50,
 "borderSize": 0,
 "top": 20,
 "minWidth": 50,
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "horizontalAlign": "right",
 "mode": "push",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "transparencyActive": false,
 "shadow": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "IconButton X"
 },
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "propagateClick": false
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "right": 20,
 "width": "100%",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "verticalAlign": "top",
 "minHeight": 50,
 "borderSize": 0,
 "top": 20,
 "minWidth": 50,
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "horizontalAlign": "right",
 "mode": "push",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "transparencyActive": false,
 "shadow": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "IconButton X"
 },
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "propagateClick": false
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "right": 20,
 "width": "10%",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "verticalAlign": "top",
 "minHeight": 50,
 "borderSize": 0,
 "top": 20,
 "minWidth": 50,
 "height": "10%",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "horizontalAlign": "right",
 "mode": "push",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "transparencyActive": false,
 "shadow": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "IconButton X"
 },
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "propagateClick": true
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_BD87AAD4_9478_3C4B_41BE_0345EF6421AD",
 "left": "0%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "bottom",
 "width": "100%",
 "url": "skin/Image_BD87AAD4_9478_3C4B_41BE_0345EF6421AD.png",
 "minHeight": 1,
 "borderSize": 0,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "horizontalAlign": "left",
 "class": "Image",
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image40635"
 },
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_BD874AD4_9478_3C4B_41DE_DE522887B2C7",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "width": "100%",
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "gap": 0,
 "scrollBarOpacity": 0.5,
 "height": "5%",
 "class": "Container",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "borderRadius": 0,
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_BD877AD4_9478_3C4B_41AC_A13D39E1584C",
 "paddingLeft": 0,
 "paddingBottom": 30,
 "paddingRight": 0,
 "verticalAlign": "top",
 "width": "100%",
 "children": [
  "this.HTMLText_BD876AD4_9478_3C4B_41D6_3C886AE845B6",
  "this.Container_BD870AD4_9478_3C4B_41D4_7C5B5C74D90A"
 ],
 "layout": "vertical",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 520,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 100,
 "scrollBarColor": "#E73B2C",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarOpacity": 0.79,
 "height": "100%",
 "class": "Container",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "borderRadius": 0,
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 },
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_BD84DAD4_9478_3C4B_41D9_38F6A3F8328B",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "width": 370,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "height": 40,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "height": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true
},
{
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundOpacity": 0.8,
 "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
 "paddingLeft": 10,
 "paddingBottom": 0,
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "verticalAlign": "middle",
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "layout": "horizontal",
 "minHeight": 1,
 "borderSize": 0,
 "width": "100%",
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_BD141CC8_9478_145B_41D4_265F47E47DB6, true, 0, null, null, false); this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, false, 0, null, null, false)",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "fontSize": 18,
 "horizontalAlign": "left",
 "mode": "push",
 "shadowBlurRadius": 6,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "label": "Dashboard",
 "fontStyle": "italic",
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "class": "Button",
 "shadow": false,
 "borderRadius": 0,
 "paddingTop": 0,
 "data": {
  "name": "Button Tour Info"
 },
 "textDecoration": "none",
 "propagateClick": true,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "height": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundOpacity": 0.8,
 "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
 "paddingLeft": 10,
 "paddingBottom": 0,
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "verticalAlign": "middle",
 "width": 220,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "layout": "horizontal",
 "minHeight": 1,
 "borderSize": 0,
 "iconHeight": 32,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, true, 0, null, null, false); this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false); this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false)",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "fontColor": "#FFFFFF",
 "height": 50,
 "fontSize": 18,
 "horizontalAlign": "left",
 "mode": "push",
 "shadowBlurRadius": 6,
 "gap": 23,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Daftar Aset",
 "fontStyle": "italic",
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "class": "Button",
 "shadow": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "Button Panorama List"
 },
 "textDecoration": "none",
 "cursor": "hand",
 "propagateClick": true,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "height": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "borderRadius": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true
},
{
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundOpacity": 0.8,
 "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
 "paddingLeft": 10,
 "paddingBottom": 0,
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "verticalAlign": "middle",
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "layout": "horizontal",
 "minHeight": 1,
 "borderSize": 0,
 "pressedLabel": "Location",
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false); this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false)",
 "width": "100%",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "fontSize": 18,
 "horizontalAlign": "left",
 "mode": "push",
 "shadowBlurRadius": 6,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "label": "Location",
 "fontStyle": "italic",
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "class": "Button",
 "shadow": false,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "Button Location"
 },
 "textDecoration": "none",
 "propagateClick": true,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "height": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "borderRadius": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true
},
{
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundOpacity": 0.8,
 "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
 "paddingLeft": 10,
 "paddingBottom": 0,
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "verticalAlign": "middle",
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "layout": "horizontal",
 "minHeight": 1,
 "borderSize": 0,
 "width": "100%",
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false); this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, false, 0, null, null, false)",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "fontSize": 18,
 "horizontalAlign": "left",
 "mode": "push",
 "shadowBlurRadius": 6,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "label": "Floorplan",
 "fontStyle": "italic",
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "class": "Button",
 "shadow": false,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "Button Floorplan"
 },
 "textDecoration": "none",
 "propagateClick": true,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "height": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true
},
{
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundOpacity": 0.8,
 "id": "Button_7DBC8382_7065_343F_4183_17B44518DB40",
 "paddingLeft": 10,
 "paddingBottom": 0,
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "verticalAlign": "middle",
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "layout": "horizontal",
 "minHeight": 1,
 "borderSize": 0,
 "width": "100%",
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false); this.setComponentVisibility(this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536, true, 0, null, null, false); this.setComponentVisibility(this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC, true, 0, null, null, false); this.setComponentVisibility(this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C, true, 0, null, null, false); this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false)",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "fontSize": 18,
 "horizontalAlign": "left",
 "mode": "push",
 "shadowBlurRadius": 6,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "label": "Kondisi Aset",
 "fontStyle": "italic",
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "class": "Button",
 "shadow": false,
 "borderRadius": 0,
 "paddingTop": 0,
 "data": {
  "name": "Button Photoalbum"
 },
 "textDecoration": "none",
 "propagateClick": true,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "height": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true
},
{
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundOpacity": 0.8,
 "id": "Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
 "paddingLeft": 10,
 "paddingBottom": 0,
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "verticalAlign": "middle",
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "layout": "horizontal",
 "minHeight": 1,
 "borderSize": 0,
 "width": "100%",
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_BD84EAD4_9478_3C4B_41C0_BDBA5096F748, true, 0, null, null, false); this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, false, 0, null, null, false)",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "fontSize": 18,
 "horizontalAlign": "left",
 "mode": "push",
 "shadowBlurRadius": 6,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "label": "Informasi",
 "fontStyle": "italic",
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "class": "Button",
 "shadow": false,
 "borderRadius": 0,
 "paddingTop": 0,
 "data": {
  "name": "Button Contact"
 },
 "textDecoration": "none",
 "propagateClick": true,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "height": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "width": 40,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "height": 2,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "blue line"
 },
 "propagateClick": true
},
{
 "children": [
  "this.IconButton_66589837_74AF_8B56_41D7_A6F4FAC02CC3",
  "this.IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57",
  "this.IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4",
  "this.IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE",
  "this.IconButton_6658D838_74AF_8B5A_41D7_154D466041BB"
 ],
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "id": "Container_66588837_74AF_8B56_41CA_E204728E8E6C",
 "verticalAlign": "middle",
 "width": "100%",
 "layout": "horizontal",
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "height": 40,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 16,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "-Container settings"
 },
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "width": "100%",
 "paddingRight": 0,
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "height": 78,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "visible": false,
 "borderRadius": 0,
 "data": {
  "name": "HTMLText47602"
 },
 "propagateClick": true
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "paddingBottom": 20,
 "id": "HTMLText_BD15BCC8_9478_145B_41A0_1BDCC9E92EE8",
 "width": "100%",
 "paddingRight": 10,
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.45vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.94vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.94vh;font-family:'Oswald';\"><B><I>DOLOR SIT AME</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.55vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.55vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.55vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.59vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.55vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.55vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.71vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText"
 },
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 1,
 "id": "Button_BD145CC8_9478_145B_41D6_359CB4C54BCA",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "verticalAlign": "middle",
 "width": 180,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "pressedBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "minHeight": 1,
 "borderSize": 0,
 "iconHeight": 32,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "pressedBackgroundOpacity": 1,
 "height": 50,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "fontSize": "2.39vh",
 "horizontalAlign": "center",
 "mode": "push",
 "shadowBlurRadius": 6,
 "gap": 5,
 "backgroundColor": [
  "#04A3E1"
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "label": "LOREM IPSUM",
 "fontStyle": "italic",
 "class": "Button",
 "backgroundOpacity": 0.7,
 "shadowSpread": 1,
 "shadow": false,
 "paddingTop": 0,
 "textDecoration": "none",
 "borderRadius": 50,
 "data": {
  "name": "Button31015"
 },
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "bold"
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "paddingBottom": 10,
 "id": "HTMLText_BD876AD4_9478_3C4B_41D6_3C886AE845B6",
 "width": "100%",
 "paddingRight": 0,
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0,
 "scrollBarVisible": "rollOver",
 "height": "46%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.45vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.94vh;font-family:'Oswald';\"><B><I>Be-ARISE </I></B></SPAN><SPAN STYLE=\"color:#003399;font-size:3.19vh;font-family:'Oswald';\"><I>Virtual Tour</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.94vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.94vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText18899"
 },
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_BD870AD4_9478_3C4B_41D4_7C5B5C74D90A",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "width": "100%",
 "children": [
  "this.Image_BD873AD4_9478_3C4B_41E1_8CD5E779D6D2",
  "this.HTMLText_BD872AD4_9478_3C4B_41E0_004DEE953DF2"
 ],
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "height": "75%",
 "class": "Container",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "borderRadius": 0,
 "paddingTop": 0,
 "data": {
  "name": "- content"
 },
 "propagateClick": false
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_BD873AD4_9478_3C4B_41E1_8CD5E779D6D2",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "width": "29.412%",
 "url": "skin/Image_BD873AD4_9478_3C4B_41E1_8CD5E779D6D2.png",
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "height": "46.208%",
 "horizontalAlign": "left",
 "class": "Image",
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "agent photo"
 },
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "id": "HTMLText_BD872AD4_9478_3C4B_41E0_004DEE953DF2",
 "width": "67.647%",
 "paddingRight": 10,
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.55vh;font-family:'Oswald';\"><B><I>S.N. MAHARDIKA PUTRA</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.39vh;font-family:'Oswald';\"><I>Spesialis SDA Junior II</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.91vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.91vh;font-family:'Oswald';\"><I>C: Perum Jasa Tirta II</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.91vh;font-family:'Oswald';\"><I>M: +62 81 555 949 159</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.91vh;font-family:'Oswald';\"><I>E: vian.mahardika@gmail.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.91vh;font-family:'Oswald';\"><I>A: Bekasi</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.91vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.44vh;\">Be-ARISE merupakan sebuah inovasi yang dikembangkan sebagai bentuk partisipasi dalam Kontes Inovasi yang diselenggarakan oleh Perum Jasa Tirta II. Inovasi ini dirancang untuk menghadirkan solusi yang kreatif, aplikatif, dan berkelanjutan dalam mendukung peningkatan efektivitas proses kerja serta memberikan nilai tambah bagi perusahaan.</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText19460"
 },
 "propagateClick": false
}],
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "class": "Player",
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "borderRadius": 0,
 "mouseWheelEnabled": true,
 "scripts": {
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "existsKey": function(key){  return key in window; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getKey": function(key){  return window[key]; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; }
 },
 "paddingTop": 0,
 "data": {
  "name": "Player468"
 },
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": [
  "this.IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "propagateClick": true,
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
