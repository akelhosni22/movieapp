import './App.css'
import React,{useState} from 'react'
import Movielist from './components/Movielist/Movielist'
import Search from './components/Search/Search'
import Add from './components/Movielist/Add'
import Rating from './components/Movielist/Rating'
import StarRatings from 'react-star-ratings'
import Moviedetails from './components/Moviedetails'
import {Switch , Route} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';


const App = () => {
	const movies=[
		{   id:uuidv4() ,
			title:"Ferry", 
			description:"A ruthless Ferry Bouman is sent to his native region of Brabant by his boss Brink to avenge an attack on their gang. When he meets the lovely Danielle and old family feuds resurface, Brabant starts to pierce his steel armour.      A ruthless Ferry Bouman is sent to his native region of Brabant by his boss Brink to avenge an attack on their gang. When he meets the lovely Danielle and old family feuds resurface, Brabant starts to pierce his steel armour.A ruthless Ferry Bouman is sent to his native region of Brabant by his boss Brink to avenge an attack on their gang. When he meets the lovely Danielle and old family feuds resurface, Brabant starts to pierce his steel armour.",
			posterurl:"https://i.egycdn.com/pic/WmFwZndlY21ZanZOam1wam1lY1BtYmxtdm1qbVl2bW0.jpg",
			rating:"4",
			trailer: "https://www.youtube.com/embed/MG6U7gduIwA",
		},
		{   id: uuidv4(),
			title:"The Mad Hatter",
		description:"The Mad Hatter is portrayed as a middle-school age boy in oversized clothes and a large hat that covers his whole head. Unlike most Wonderland residents, he acts rather bratty and rude to Ariko (the s, Mad Hatter is killed by a twisted Cheshire Cat.",
		posterurl:"https://i.egycdn.com/pic/WmFwZndlY21IY21Ub2NtWWVjbWJQbGFtSGt0dw.jpg",
		rating:	"3",
		trailer :"https://www.youtube.com/embed/GeYt9DH3wkw" ,


		},
		{   id:uuidv4() ,
			title:"3 Tickets to Paradise",
	    description:"J Parker, her ex-husband and a federal agent head for a ghost town in Mexico called Paradise in search for a hidden cache of 5000 stolen double eagle $20 gold coins.",
	     posterurl:"https://i.egycdn.com/pic/WmFwZndlY21IY21UVFltbXZFY21FYXZjbUdOSXhtag.jpg",
		rating:	"2",
		trailer :" https://www.youtube.com/embed/JpvW1T7hXjo",


		},

		
		{ 
			id:uuidv4() ,
		  title:"the Djinn",
		  description:"في إطار من الرعب والتشويق، يجد صبي أبكم نفسه محاصرا في شقته مع وحش شرير لا يرحم، عندما يتمنى تحقيق أمنيته الكبرى التي تؤدي بها إلى طريق من الظلام والخوف.",
		  posterurl:"https://i.egycdn.com/pic/WmFwZndlY21IY21wanZOcGFjbWJtcFR4am1Zc2o.jpg",
		  rating:	"1",
		  trailer:"https://www.youtube.com/embed/l6o67QttuUg",
		  },
		  
		  { 
			id:uuidv4() ,
		  title:"Godzilla vs. Kong",
		  description:"تدور الأحداث حول المواجهة المنتظرة والحاسمة التي ستقع بين كونج العظيم وجودزيلا التي لا يمكن إيقافها، كل ذلك والعالم يرى ويراقب من منهم سيكون ملك كل الوحوش.",
		  posterurl:"https://i.egycdn.com/pic/WmFwZndlY21Zam1wcFlZYWNtVEVtcHZtdm1qdmNtdg.jpg",
		  rating:	"6",
		  trailer:"https://www.youtube.com/embed/odM92ap8_c0",
		  },
	
		 { id:uuidv4() ,
		  title:"Great White",
		  description:"تدور أحداث الفيلم في قالب من التشويق واﻹثارة حول رحلة يشارك فيها خمس ركاب، والتي تتحول إلى كارثة حين تتحطم بهم الطائرة، وينتهي بهم المطاف على طوف، مع سمكة قرش تبحر حولهم. ",
		  posterurl:"https://i.egycdn.com/pic/WmFwZndlY21ZcG1tYm1UYnZSY212bXZtRWN0Y21wamw.jpg",
		  rating:	"5",
		  trailer:"https://www.youtube.com/embed/Nwnd4NWHHIY",
		  },
		
	];
	const [search,setSearch] = useState("")
    const handleSearch=(x)=>{setSearch(x)}
	const [newlist, setNewlist] = useState(movies)
	const handlemovie=(y)=>{setNewlist([...movies,y])}
	const [ratingSearch, setRatingSearch] = useState(0)
	const changeRating = (x) => {
		setRatingSearch(x)
		
	} 
	

	


	return (
		<section className="App">
			<div className="free"> <h1> free movies </h1></div>
			<div className="watchmovies">
			<Switch>
            <Route path="/:title" exact render={() => (
                <>
                    <Moviedetails movies={movies} />
                </>
            )}
            />
            <Route path="/" exact render={() => (
                <>	



			<StarRatings
            rating={5}
            starRatedColor="gold"
            changeRating={changeRating}
            numberOfStars={5}
            name='rating'/>
        
		
       <Search handleSearch={handleSearch}/>
	   <Rating changeRating={ changeRating}/>
       <Movielist movies={movies} newlist={newlist} search={search} ratingSearch={ratingSearch} />
	   <Add handlemovie={handlemovie}/>
	   
	   </>
            )}
            />
            </Switch>
            </div>

	   
		</section>
	
		
	)
}

export default App;
