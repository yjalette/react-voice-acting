const videos = [
{
    src: "https://www.youtube.com/embed/VRyN2KGjowU?si=dAbPaZ7NmFOOXMCJ" 
},
{
    src: "https://www.youtube.com/embed/kZY6XMSwwQk?si=DKQsmkyrmmdKR1oS" 
},
{
    src: "https://www.youtube.com/embed/PQ-oBtuBFDM?si=yKn82LKA3QAyuIE3"
},
{
    src: "https://www.youtube.com/embed/RyEUl7Kp9VA?si=pgj3POjvutsE1T3w"
},
{
    src: "https://www.youtube.com/embed/b1jeTOdOFRs?si=Wri4XN-8lp5pU9_8"
},
{
    src: "https://www.youtube.com/embed/xlTojM0RHP8?si=Dc8copU-XuQpvd9Y"
},
{
    src: "https://www.youtube.com/embed/hl4IgP-zm3s?si=rUUmAXnlDVG10C4h"
}
]

const EmbedVideo = () => (
    <div className="embedVideos">
   {videos && videos.map(vid => (
    <div className="embedVideo__container" key={vid.src}>
      <iframe
        className="embedVideo__frame"
          src={vid.src}
          frameBorder="0"
          allow="
          accelerometer; 
          autoplay; 
          clipboard-write; 
          encrypted-media; 
          gyroscope; 
          picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
))}
    </div>
  );

// const EmbedVideo = ({ embedId }) => (
//   <div className="video-responsive">
//     <iframe
//       width="853"
//       height="480"
//       src={`https://www.youtube.com/embed/${embedId}`}
//       frameBorder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//       allowFullScreen
//       title="Embedded youtube"
//     />
//   </div>
// );


export default EmbedVideo;