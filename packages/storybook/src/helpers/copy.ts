import { randomNumber } from '../../../core/src/utils/number.utils';

const copies = [
	'<p><strong>Lorem ipsum</strong> dolor sit amet, consectetuer adipiscing elit. Pellentesque sapien. Integer malesuada. <strong>Etiam bibendum elit eget erat.</strong> Pellentesque pretium lectus id turpis. Nullam dapibus fermentum ipsum. Ut tempus purus at lorem. Duis viverra diam non justo. Fusce consectetuer risus a nunc. Integer <strong>imperdiet lectus</strong> quis justo. Fusce suscipit libero eget elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Pellentesque ipsum. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor.</p>',
	'<p>Duis pulvinar. In dapibus augue non sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In convallis. Aliquam ornare wisi eu metus. Maecenas libero. Praesent id justo in neque elementum ultrices. Integer lacinia. Suspendisse nisl. Etiam egestas wisi a erat.</p>',
	'<p>Integer pellentesque quam vel velit. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Nulla pulvinar eleifend sem. Duis condimentum augue id magna semper rutrum. Curabitur sagittis hendrerit ante. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Etiam quis quam. Curabitur vitae diam non enim vestibulum interdum. In rutrum. Pellentesque sapien. Etiam egestas wisi a erat. Cras elementum. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Fusce nibh. Phasellus faucibus molestie nisl.</p>',
	'<p>Mauris metus. Fusce suscipit libero eget elit. Duis pulvinar. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Aenean id metus id velit ullamcorper pulvinar. Donec vitae arcu. Nunc dapibus tortor vel mi dapibus sollicitudin. Cras elementum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Quisque tincidunt scelerisque libero. Etiam dictum tincidunt diam. Maecenas lorem. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Duis viverra diam non justo. Sed convallis magna eu sem. Nulla pulvinar eleifend sem. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Aliquam erat volutpat. Sed ac dolor sit amet purus malesuada congue.</p>',
	'<p>Nulla non lectus sed nisl molestie malesuada. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Nunc tincidunt ante vitae massa. Nam sed tellus id magna elementum tincidunt.</p>',
	'<p>Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Aenean placerat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>',
	'<p>Sed ac dolor sit amet purus malesuada congue.</p>',
];

const labels = [
	'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut',
	'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus',
	'Praesent in mauris eu tortor porttitor accumsan',
	'Nulla non lectus sed nisl molestie malesuada',
	'Cum sociis natoque penatibus et magnis dis parturient montes',
];

const shortLabels = ['Nemo enim', 'Cum sociis', 'Praesent in mauris', 'Nulla non lectus', 'Cum sociis natoque'];

export const getCopy = (): string => {
	const randomCopy = randomNumber(0, copies.length - 1);
	return copies[randomCopy];
};
export const getLabel = (short = false): string => {
	if (short) {
		const randomCopy = randomNumber(0, shortLabels.length - 1);
		return shortLabels[randomCopy];
	}
	const randomCopy = randomNumber(0, labels.length - 1);
	return labels[randomCopy];
};
