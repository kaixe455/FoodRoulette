import { getNotTestedFoods, updateFood } from "@services/foods.js";
import { useState, useEffect } from "react";
import { getRandomInt, sleep } from "@services/utils";

function Roulette() {
	const [notTestedFoods, setNotTestedFoods] = useState([]);
	const [firstItem, setFirstItem] = useState();
	const [secondItem, setSecondItem] = useState();
	const [thridItem, setThridItem] = useState();
	const [isActiveRoulette, setIsActiveRoulette] = useState(false);
	const [isChosenFood, setIsChosenFood] = useState(false);
	const [winner, setWinner] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	let winnerFood;
	let firstFood;
	let secondFood;
	let thirdFood;

	const playRoulette = async () => {
		const mixingTime = 25;
		setIsActiveRoulette(true);
		winnerFood = notTestedFoods[getRandomInt(notTestedFoods.length)];
		setWinner(winnerFood);
		for (var i = 0; i < mixingTime + 1; i++) {
			setFirstItem(notTestedFoods[getRandomInt(notTestedFoods.length)]);
			setSecondItem(notTestedFoods[getRandomInt(notTestedFoods.length)]);
			setThridItem(notTestedFoods[getRandomInt(notTestedFoods.length)]);
			await sleep(1000);
			if (i == mixingTime) {
				setFirstItem(notTestedFoods[getRandomInt(notTestedFoods.length)]);
				await setSecondItem(winnerFood);
				setThridItem(notTestedFoods[getRandomInt(notTestedFoods.length)]);
				setIsActiveRoulette(false);
				await setIsChosenFood(true);
				winnerFood.tested = true;
				console.log(winnerFood);
				await updateFood(winnerFood);
			}
		}
	};

	useEffect(() => {
		const getFoods = async () => {
			let notTestedFoods = await getNotTestedFoods();
			setNotTestedFoods(notTestedFoods);
			firstFood = notTestedFoods[0];
			secondFood = notTestedFoods[1];
			thirdFood = notTestedFoods[2];
			if (firstFood) {
				setFirstItem(firstFood);
			}
			if (secondFood) {
				setSecondItem(secondFood);
			}
			if (thirdFood) {
				setThridItem(thirdFood);
			}
			setIsLoading(false);
		};
		getFoods();
	}, []);

	return (
		<div>
			{!isLoading && (
				<div className="grid grid-rows-3 font-bungee text-4xl gap-4 my-10">
					<div className="row-span-1 flex flex-col items-center">
						<span
							id="itemFirst"
							className={`opacity-40 ${
								isActiveRoulette ? "animate-ping-slow" : ""
							}`}
						>
							{firstItem?.name ? firstItem.name : ""}
						</span>
					</div>
					<div className="row-span-1 flex flex-col items-center">
						<span
							id="secondItem"
							className={`opacity-100 ${
								isActiveRoulette ? "animate-ping-slow" : ""
							} ${isChosenFood ? "text-5xl animate-bounce" : ""}`}
						>
							{secondItem?.name ? secondItem.name : ""}
						</span>
					</div>
					<div className="row-span-1 flex flex-col items-center">
						<span
							id="thridItem"
							className={`opacity-40 ${
								isActiveRoulette ? "animate-ping-slow" : ""
							}`}
						>
							{thridItem?.name ? thridItem.name : ""}
						</span>
					</div>
				</div>
			)}
			<div className="grid grid-rows-1 font-bungee text-4xl gap-4 my-10 p-6">
				<button
					onClick={(e) => playRoulette()}
					className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-4 border-b-4 border-black hover:border-black rounded transition-all duration-300"
				>
					START
				</button>
			</div>
		</div>
	);
}

export default Roulette;
