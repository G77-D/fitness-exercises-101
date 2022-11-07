import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
	return (
		<Box width="400px" sx={{ width: { xl: "1488px" } }}>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/exercise/:id" element={<ExerciseDetail />} />
			</Routes>
			<footer />
		</Box>
	);
};

export default App;

/* notes*/
/* Box is div with colours  from material ui */
/* sx= size and width on big and small screen*/
/* m= which mean marign is auto*/
