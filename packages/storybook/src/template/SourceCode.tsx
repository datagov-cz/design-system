import React from 'react';
import { PreStyle, PreCodeStyle } from '../styles/code.style';

export interface SourceCodeProps {
	children: React.ReactNode;
}

export const SourceCode = (props: SourceCodeProps) => {
	return (
		<pre style={PreStyle}>
			<code style={PreCodeStyle}>{props.children}</code>
		</pre>
	);
};
