import React, { useEffect, useState } from "react";

function App() {
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your provided API URL
    const videoUrl = `https://rr5---sn-i5uif5t-cags.googlevideo.com/videoplayback?expire=1738021975&ei=98eXZ6OBEMaRssUP-b7dsQQ&ip=27.7.150.26&id=o-ABG8JrNYu91P0JKy_0Y__L_KK3qvvOSvDJXCx8nYMlmC&itag=396&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1738000375%2C&mh=9W&mm=31%2C29&mn=sn-i5uif5t-cags%2Csn-gwpa-qxa6&ms=au%2Crdu&mv=m&mvi=5&pl=22&rms=au%2Cau&initcwndbps=2497500&siu=1&bui=AY2Et-NM80VEWYq-OXjA2VgqJNNK7pwdcAsI7LrKhHq54kYIOybkDKI46wQTmwDMbDsSACDpTQ&spc=9kzgDbX0wyEfGgeqdrw9o5aDSw6JZd9HPD-tawA_RWqOQUK6mSrs0dKXwDZPC_DxziL3qz0LWA&vprv=1&svpuc=1&mime=video%2Fmp4&ns=vsMRxo4VEo03U0Op_Ih8KJIQ&rqh=1&gir=yes&clen=3856838&dur=144.769&lmt=1732568001389320&mt=1737999905&fvip=5&keepalive=yes&fexp=51326932%2C51353498&c=WEB_EMBEDDED_PLAYER&sefc=1&txp=5537434&n=rWPS1CDppqKPsA&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Csiu%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhALD1oY5x_Zdss2IIFTBr8KPu6SBCDnJRoYTtLwGYXeBEAiEAt3Qg1BN0nxwR8LSgePLXwhuqokfwIhvHaXivEu3kSYA%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=AGluJ3MwRgIhAJwbyH248VWuEHgLRAsu_RVqdY3PFhCkpokRqTtl-Ih-AiEAw4wLtOZDb4sg1n4nvtMI2dyXgFQSaDc2Qqy6GXX-b0U%3D&alr=yes&cpn=VVOv0_-l35M_vJOT&cver=1.20250121.00.00&range=297319-720809&rn=6&rbuf=11244&pot=Mls-I5_-Ir14Cj4bAn6uoMuPHowFU-mif0YHNLX9LgGTqFGkJt5n7BoXiYrKQODRpto-5Z4kYJaCRkRnUa2LTY4LN_XhBVMW_FoPiF0BlbcUJXWhKp1wmmUNwfj1&ump=1&srfvp=1`; // truncated for clarity

    fetch(videoUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.blob(); // For video content, use `blob`
      })
      .then((blob) => {
        const videoSrc = URL.createObjectURL(blob);
        setVideoData(videoSrc);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div>
      <h1>Video API Example</h1>
      {error && <p>Error: {error}</p>}
      {videoData ? (
        <video controls src={videoData} style={{ maxWidth: "100%" }} />
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
}

export default App;
