import React, { useState } from 'react'

import Search from './Components/Search/Search';
import { Box } from "@chakra-ui/react"
import axios from 'axios';
import { useEffect } from 'react';
import Posts from './Components/Posts/Posts';


function App () {
	const [posts, setPosts] = useState([])
	const [search, setSearch] = useState('')
	const [show, setShow] = useState(false)
	const [searchResults, setSearchResults] = useState([]);

	const url = 'http://localhost:3001/'

		useEffect(() => {
			axios.get(url + 'posts')
				.then(res => {
					if (res.status === 200 || res.status === 201) {
						show ? setPosts(res.data) : setPosts(res.data.slice(0, 4)); 
					}
				})
		}, [show])
		
		useEffect(() => {
			const filteredResults = posts.filter((post) => (((post.author).toLowerCase()).includes(search.toLowerCase())) || (((post.title).toLowerCase()).includes(search.toLowerCase())));
			setSearchResults(filteredResults.reverse());
		}, [posts, search])
	
	const showAll = () => {
		setShow(!show)
	}
	console.log(show);
	return (
		<Box w='100%' height='100%' display='block' backgroundColor='#0f131d' p='20px'>
			<Box className="container row" pt={'50px'}>
				<Search
					search={search}
					setSearch={setSearch}
					post={searchResults[0]}
				/>
				<Posts
					posts={searchResults}
					showAll={showAll}
					show={show}
				/>
			</Box>
		</Box>
	);
}

export default App;