import React, { useEffect } from "react";
import { isAndroid, isIOS } from "react-device-detect";

const App = () => {
  useEffect(() => {
    if (isAndroid) {
      const url =
      "intent://qrcode-tiger.com/#Intent;scheme=https;package=com.qrtiger;end";

      window.location.replace(url);
    } else if (isIOS) {
      window.location.replace("instagram://");

      setTimeout(() => {
        window.location.replace(
          "https://apps.apple.com/us/app/instagram/id389801252"
        );
      }, 10000);
    } else {
      window.location.replace("https://instagram.com");
    }
  }, []);

  return (
    <div className="App">
      <div>
    
      </div>
      {isAndroid ? (
        <a href="https://play.google.com/store/apps/details?id=com.qrtiger&hl=en&gl=US">
          Open Android app
        </a>
      ) : isIOS ? (
        <a href="https://apps.apple.com/us/app/instagram/id389801252">
          Open iOS app
        </a>
      ) : (
        <a href="https://instagram.com">Open Web app</a>
      )}
    </div>
  );
};

export default App;