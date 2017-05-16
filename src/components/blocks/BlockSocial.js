import React from 'react';

const BlockSocial = ({ blockOptions }) => {
	const imgLocation = document.location.href.indexOf('nm_email_editor') > 0? `${document.location.origin}/wp-content/plugins/newsmine/include/email_editor/`: '/';
	return (
		<table
			width="100%"
			cellPadding="0"
			cellSpacing="0"
			role="presentation"
		>
			<tbody>
				<tr>
					<td>
						<table
							width="100%"
							cellPadding="0"
							cellSpacing="0"
							role="presentation"
						>
							<tbody>
								<tr>
									<td
									style={blockOptions.elements[0]}
									>
										<a target="_blank" style={{
											"display": blockOptions.elements[0].ok_display
										}} href={blockOptions.elements[0].ok_link}><img alt="ok" src={`${imgLocation}${blockOptions.elements[0].ok_source}`} /></a>
										<a target="_blank" style={{
											"display": blockOptions.elements[0].vk_display
										}} href={blockOptions.elements[0].vk_link}><img alt="vk" src={`${imgLocation}${blockOptions.elements[0].vk_source}`} /></a>
										<a target="_blank" style={{
											"display": blockOptions.elements[0].youtube_display
										}} href={blockOptions.elements[0].youtube_link}><img alt="fb" src={`${imgLocation}${blockOptions.elements[0].youtube_source}`} /></a>
										<a target="_blank" style={{
											"display": blockOptions.elements[0].facebook_display
										}} href={blockOptions.elements[0].facebook_link}><img alt="yt" src={`${imgLocation}${blockOptions.elements[0].facebook_source}`} /></a>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default BlockSocial;
