import React from 'react';
import { TableStyle, TdStyle, ThStyle } from '../styles/table.style';
import { CodeStyle } from '../styles/code.style';
import { FlexColumnStyle } from '../styles/flex.style';
import { TokenFont } from '../data/font-definitions';

export interface FontTableProps {
	fonts: TokenFont[];
}

export const FontTable = (props: FontTableProps) => {
	const tokens = [
		'.gov-text--[SIZE]',
		'var(--gov-text-[SIZE]-font-size)',
		'var(--gov-text-[SIZE]-line-height)',
		'var(--gov-text-[SIZE]-font-weight)',
		'var(--gov-text-[SIZE]-letter-spacing)',
	];
	return (
		<table style={TableStyle}>
			<thead>
				<tr>
					<th className={'gov-text--l'} style={{ ...ThStyle, ...{ width: '15rem' } }}>
						Example
					</th>
					<th className={'gov-text--l'} style={{ ...ThStyle, ...{ width: '25rem' } }}>
						Description
					</th>
					<th className={'gov-text--l'} style={ThStyle}>
						Token
					</th>
				</tr>
			</thead>
			<tbody>
				{props.fonts.map((font, i) => {
					return (
						<tr key={i}>
							<td style={TdStyle}>
								<div style={FlexColumnStyle}>
									<div className={'gov-text--' + font.size}>Aa</div>
									<code style={CodeStyle} className={'gov-text--s'}>
										{font.definitions.rem}
									</code>
									<code style={CodeStyle} className={'gov-text--s'}>
										{font.definitions.px}
									</code>
								</div>
							</td>
							<td style={TdStyle}>
								<p className={'gov-text--m'} style={{ fontWeight: '600' }}>
									Font Size: {font.name}
								</p>
								{font.description ? <p className={'gov-text--s'}>{font.description}</p> : null}
							</td>
							<td style={TdStyle}>
								<div style={FlexColumnStyle}>
									{tokens.map((token, p) => {
										return (
											<code className={'gov-text--s'} style={CodeStyle} key={p}>
												{token.replace('[SIZE]', font.size)}
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
