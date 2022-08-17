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
								setPosts(res.data)
							}
						})
		}, [])
		
		useEffect(() => {
			const filteredResults = posts.filter((post) => ((post.title).toLowerCase()).includes(search.toLowerCase()));

			setSearchResults(filteredResults.reverse());
		}, [posts, search])
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
					show={show}
					setShow={setShow}
				/>
			</Box>
		</Box>
	);
}

export default App;