import { useLoaderData } from 'react-router-dom';
import Count from './help/Count';

const Home = () => {
	const posts = useLoaderData();
	console.log(posts);
	return (
		<div className="home">
			<h2>Welcome</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod veniam
				unde neque dolorem, tempore in maiores, officia tenetur doloribus
				obcaecati quibusdam beatae minima aliquid cum corrupti eveniet!
				Doloribus odio consequatur explicabo quis accusantium eos. Quo quidem
				perferendis fuga sunt aperiam ipsum qui porro amet!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod veniam
				unde neque dolorem, tempore in maiores, officia tenetur doloribus
				obcaecati quibusdam beatae minima aliquid cum corrupti eveniet!
				Doloribus odio consequatur explicabo quis accusantium eos. Quo quidem
				perferendis fuga sunt aperiam ipsum qui porro amet!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod veniam
				unde neque dolorem, tempore in maiores, officia tenetur doloribus
				obcaecati quibusdam beatae minima aliquid cum corrupti eveniet!
				Doloribus odio consequatur explicabo quis accusantium eos. Quo quidem
				perferendis fuga sunt aperiam ipsum qui porro amet!
			</p>
			<Count />
		</div>
	);
};
export default Home;
