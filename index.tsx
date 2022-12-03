import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { App } from "./components/App";
import { Screen } from "./components/Screen";

const root = ReactDOM.createRoot(document.getElementById("app")!);
root.render(
	<Screen>
		<App />
	</Screen>,
);
