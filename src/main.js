import "./global.css";
import HMR from "@roxi/routify/hmr";
import App from "./App.svelte";

const app = HMR(App, { target: document.body }, "routify-app");

export default app;

// import App from './App.svelte';

// const app = new App({
// 	target: document.body,
// 	props: {
// 	  name: 'world',
// 	}
// });

// export default app;