import React, { useState } from 'react';

const DatingCard = () =>{
	const [people] = useState([
	  {
	    name: "Some Girl Around",
	    imgUrl:
	      "https://www.tribuna.com.mx/u/fotografias/m/2021/1/19/f850x638-174990_252479_5050.jpg" 
	      +"?ixid=" 
	      +"61f9cf20b6e5950d3c0feasd190ce87217fbbbe" +
	      "&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
	  },
      
	  {
	    name: "Another Girl",
	    imgUrl:
	      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
	  },
	  {
	    name: "Random Guy",
	    imgUrl:
	      "https://images.unsplash.com/photo-1520409364224-63400afe26e5" +
	      "?ixid=" +
	      "MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" +
	      "&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
	  },
	  {
	    name: "Rihanna",
	    imgUrl:
	      "https://cdn2.actitudfem.com/media/files/styles/big_img/public/images/2021/09/principal-rihanna.jpg" +
	      "?ixid=" +
	      "5db8391b58c0df53e9f490c44e7389a6762e7850" +
	      "&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
	  },
	  {
	    name: "Aquaman 2040",
	    imgUrl:
	      "https://qph.fs.quoracdn.net/main-qimg-f521020f4e9761f812d1dd8e1de32ebb-c" +
	      "?ixid=" +
	      "61f9cf20b6e5950d3c0fe167ca190ce87217faae" +
	      "&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
	  },
      
	  {
	    name: "Beyonce",
	    imgUrl:
	      "https://elcapitalino.mx/wp-content/uploads/2021/09/beyonce-40-anos-y-una-trayectoria-imparable.jpeg" +
	      "?ixid=" +
	      "93498b9c118752affcc59a94427ab6fcf33fea10" +
	      "&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
	  },
	  {
	    name: "Some Guy",
	    imgUrl:
	      "https://i1.sndcdn.com/avatars-000339084123-nag0p1-t500x500.jpg" +
	      "?ixid=" +
	      "61f9cf20b6e5950d3c0fe167ca1fhjjreww90ce87217fbbbe" +
	      "&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
	  },
      
	  {
	    name: "Someone",
	    imgUrl:
	      "http://25.media.tumblr.com/ea2812f025bd082c46be95c07432933b/tumblr_mektaoQ2P31rfu1g3o1_1280.jpg" +
	      "?ixid=" +
	      "61f9cf20b6e5950d3c0fe167ca1fhjjreww90ce87217fbbbe" +
	      "&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
	  },
	  {
	    name: "Another Guy",
	    imgUrl:
	      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
	  },
	  {
	    name: "Random Girl",
	    imgUrl:
	      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
	  },
      
	  {
	    name: "El compa Brad",
	    imgUrl:
	      "https://aws.glamour.es/prod/designs/v1/assets/620x620/646712.jpg" +
	      "?ixid=" +
	      "53b3b4acef11299482bdcf0fc33281c5b64b448c" +
	      "&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
	  },
	]);
      
     
}

//	import toJson from './TOJSON';

const toJSON = (people) => {
  people.map((person) => {
    let append = ` {"name": "${person.name}",  "imgUrl": "${person.imgUrl}"}, `;
    return console.log(`${append}`);
  });

};

// console.log(toJson(people));



export default toJSON; 