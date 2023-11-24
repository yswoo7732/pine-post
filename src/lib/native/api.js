const NativeConnector = () => {
  function getAccessToken(callback) {
    if (/Android/i.test(window.navigator.userAgent)) {
      window.AosConnector.getAccessToken('callbackAccessToken');
    } else if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
      window.webkit.messageHandlers.getAccessToken.postMessage(
        'callbackAccessToken'
      ); //ios
    }

    window.callbackAccessToken = ret => {
      callback(ret);
    };
  }

  // 계좌개설 랜딩 전 url 요청
  function setUrlAfterAccOpen() {
    let url = document.location.href;

    if (/Android/i.test(window.navigator.userAgent)) {
      window.AosConnector.setUrlAfterAccountOpening(`${url}`);
    }
    if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
      window.webkit.messageHandlers.setUrlAfterAccountOpening.postMessage(
        `${url}`
      ); //ios
    }
  }

  function setTitleBar(titleBar) {
    if (/Android/i.test(window.navigator.userAgent)) {
      window.AosConnector.setTitleBar(titleBar);
    } else if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
      window.webkit.messageHandlers.setTitleBar.postMessage(titleBar); //ios
    }
  }

  function setTitleBarWithColor(title, bgColor) {
    let param = JSON.stringify({
      title: title,
      bgColor: bgColor,
    });

    if (/Android/i.test(window.navigator.userAgent)) {
      window.AosConnector.setTitleBarWithColor(param);
    } else if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
      window.webkit.messageHandlers.setTitleBarWithColor.postMessage(param); //ios
    }
  }

  // 앱내 타이틀바 설정 제거
  function hideTitleBar() {
    if (/Android/i.test(window.navigator.userAgent)) {
      window.AosConnector.hideTitleBar();
    }
    if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
      window.webkit.messageHandlers.hideTitleBar.postMessage(''); //ios
    }
  }

  // response 공통 에러 처리
  function onResponseError(_param) {
    console.log(_param);
    let param = JSON.stringify(_param);

    if (/Android/i.test(window.navigator.userAgent)) {
      window.AosConnector.onResponseError(param);
    }
    if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
      window.webkit.messageHandlers.onResponseError.postMessage(param); //ios
    }
  }

  function sendAppsFlyerLog(eventName, eventParams) {
    if (/Android/i.test(window.navigator.userAgent)) {
      window.AosConnector.sendAppsFlyerLog(eventName, eventParams);
    }
    if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
      window.webkit.messageHandlers.sendAppsFlyerLog.postMessage(
        eventName + '+' + eventParams
      ); //ios
    }
  }

  function requestExitMenu() {
    if (/Android/i.test(window.navigator.userAgent)) {
      window.AosConnector.requestExitMenu();
    } else if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
      window.webkit.messageHandlers.requestExitMenu.postMessage(''); //ios
    }
  }

  function useGoback(callback) {
    if (/Android/i.test(window.navigator.userAgent)) {
      window.AosConnector.useGoBack(callback);
    } else if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
      window.webkit.messageHandlers.useGoBack.postMessage(callback); //ios
    }
  }

  function shareContents(url) {
    if (/Android/i.test(window.navigator.userAgent)) {
      window.AosConnector.shareContents(url);
    } else if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
      window.webkit.messageHandlers.shareContents.postMessage(url); //ios
    }
  }

  function showInvestmentCheck(prdId) {
    if (/Android/i.test(window.navigator.userAgent)) {
      window.AosConnector.showInvestmentCheck(prdId);
    } else if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
      window.webkit.messageHandlers.showInvestmentCheck.postMessage(prdId); //ios
    }
  }

  return {
    getAccessToken: getAccessToken,
    setUrlAfterAccOpen: setUrlAfterAccOpen,
    setTitleBar: setTitleBar,
    setTitleBarWithColor: setTitleBarWithColor,
    onResponseError: onResponseError,
    sendAppsFlyerLog: sendAppsFlyerLog,
    requestExitMenu: requestExitMenu,
    useGoback: useGoback,
    shareContents: shareContents,
    hideTitleBar: hideTitleBar,
    showInvestmentCheck: showInvestmentCheck,
  };
};

export default NativeConnector;
