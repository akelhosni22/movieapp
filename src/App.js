import React,{useState} from 'react'
import Movielist from './components/Movielist/Movielist'
import Search from './components/Search/Search'
import Add from './components/Movielist/Add'
const App = () => {
	const movies=[
		{
			title:"Ferry", 
			description:"A ruthless Ferry Bouman is sent to his native region of Brabant by his boss Brink to avenge an attack on their gang. When he meets the lovely Danielle and old family feuds resurface, Brabant starts to pierce his steel armour.",
			posterurl:"https://m.media-amazon.com/images/M/MV5BZThhNWM2Y2ItMDRkOC00MWEyLTg5YmItMThkMzRjYjA3Mzk4XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SY500_.jpg.jpg",
			rating:"4",
		},
		{
			title:"The Mad Hatter",
		description:"The Mad Hatter is portrayed as a middle-school age boy in oversized clothes and a large hat that covers his whole head. Unlike most Wonderland residents, he acts rather bratty and rude to Ariko (the s, Mad Hatter is killed by a twisted Cheshire Cat.",
		posterurl:"https://i.egycdn.com/pic/WmFwZndlY21IY21Ub2NtWWVjbWJQbGFtSGt0dw.jpg",
		rating:	"3",


		},
		{title:"3 Tickets to Paradise",
	    description:"J Parker, her ex-husband and a federal agent head for a ghost town in Mexico called Paradise in search for a hidden cache of 5000 stolen double eagle $20 gold coins.",
	     posterurl:"https://i.egycdn.com/pic/WmFwZndlY21IY21UVFltbXZFY21FYXZjbUdOSXhtag.jpg",
		rating:	"2",


		},
		{
		title:"the Djinn",
		description:"في إطار من الرعب والتشويق، يجد صبي أبكم نفسه محاصرا في شقته مع وحش شرير لا يرحم، عندما يتمنى تحقيق أمنيته الكبرى التي تؤدي بها إلى طريق من الظلام والخوف.",
		posterurl:"https://i.egycdn.com/pic/WmFwZndlY21IY21wanZOcGFjbWJtcFR4am1Zc2o.jpg",
		rating:	"1",
		},
		
	];
	const [search,setSearch] = useState("")
    const handleSearch=(x)=>{setSearch(x)}
	const [newlist, setNewlist] = useState(movies)
	const handlemovie=(y)=>{setNewlist([...movies,y])}


	return (
		<div className="App">
       <Search handleSearch={handleSearch}/>
       <Movielist movies={newlist} search={search} />
	   <Add handlemovie={handlemovie}/>
		</div>
	)
}

export default App;
