import React from 'react';
import { TokenColor } from '../data/color-definitions';
import { TableStyle, TdStyle, ThStyle } from '../styles/table.style';
import { CodeStyle, ColorPreviewStyle } from '../styles/code.style';
import { FlexColumnStyle } from '../styles/flex.style';

export interface ColorTableProps {
	colors: TokenColor[];
}

export const ColorTable = (props: ColorTableProps) => {
	return (
		<table style={TableStyle}>
			<thead>
				<tr>
					<th className={'gov-text--l'} style={{ ...ThStyle, ...{ width: '15rem' } }}>
						Example
					</th>
					<th className={'gov-text--l'} style={ThStyle}>
						Description
					</th>
					<th className={'gov-text--l'} style={ThStyle}>
						Token
					</th>
				</tr>
			</thead>
			<tbody>
				{props.colors.map((color, i) => {
					return (
						<tr key={i}>
							<td style={TdStyle}>
								<div style={FlexColumnStyle}>
									<div style={{ ...ColorPreviewStyle, ...{ background: color.hex } }}></div>
									<code style={CodeStyle} className={'gov-text--s'}>
										{color.hex}
									</code>
								</div>
							</td>
							<td style={TdStyle}>
								<p className={'gov-text--m'}>{color.name}</p>
								{color.description ? <p className="notes">{color.description}</p> : null}
							</td>
							<td style={TdStyle}>
								<div style={FlexColumnStyle}>
									{color.tokens.map((token, p) => {
										return (
											<code className={'gov-text--s'} style={CodeStyle} key={p}>
												{token}
											</code>
										);
									})}
								</div>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
