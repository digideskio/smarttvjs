var OrangeeJS = {
  PLATFORM:  "html5"
};

OrangeeJS.init = function(callback) {
  this.KEYS = {
    KEY_TOOLS:1,
    KEY_MUTE:1,
    KEY_RETURN:1,
    KEY_UP:38,
    KEY_DOWN:40,
    KEY_LEFT:37,
    KEY_RIGHT:39,
    KEY_WHEELDOWN:1,
    KEY_WHEELUP:1,
    KEY_ENTER:1,
    KEY_INFO:1,
    KEY_EXIT:1,
    KEY_RED:1,
    KEY_GREEN:1,
    KEY_YELLOW:1,
    KEY_BLUE:1,
    KEY_INFOLINK:1,
    KEY_RW:1,
    KEY_PAUSE:1,
    KEY_FF:1,
    KEY_PLAY:1,
    KEY_STOP:1,
    KEY_1:1,
    KEY_2:1,
    KEY_3:1,
    KEY_4:1,
    KEY_5:1,
    KEY_6:1,
    KEY_7:1,
    KEY_8:1,
    KEY_9:1,
    KEY_0:1,
    KEY_EMPTY:1,
    KEY_PRECH:1,
    KEY_SOURCE:1,
    KEY_CHLIST:1,
    KEY_MENU:1,
    KEY_WLINK:1,
    KEY_CC:1,
    KEY_CONTENT:1,
    KEY_FAVCH:1,
    KEY_REC:1,
    KEY_EMODE:1,
    KEY_DMA:1,
    KEY_PANEL_CH_UP:1,
    KEY_PANEL_CH_DOWN:1,
    KEY_PANEL_VOL_UP:1,
    KEY_PANEL_VOL_DOWN:1,
    KEY_PANEL_ENTER:1,
    KEY_PANEL_SOURCE:1,
    KEY_PANEL_MENU:1,
    KEY_PANEL_POWER:1
  };

  if (typeof callback === "function") {
    callback();
  }
};
