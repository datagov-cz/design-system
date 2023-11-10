import { ToastTypes, ToastVariants } from '../../../core/src/components/gov-toast/constants';
import { bindProps } from '../helpers/binding';
import { createIcon, basicIcons } from '../helpers/icons';
import { renderStory, story } from '../helpers/storybook';

const meta = story(
	({ enums, string, array, number }) => [
		enums('variant', undefined, ToastVariants, ToastVariants.PRIMARY),
		array('icon', undefined, basicIcons),
		enums('type', undefined, ToastTypes, ToastTypes.CLASSIC),
		array('gravity', undefined, ['top', 'bottom'], 'top'),
		array('position', undefined, ['left', 'center', 'right'], 'right'),
		string('message', undefined, 'Design system gov.cz'),
		number('time', undefined, 0),
		string('wcag-close-label', undefined, 'Close message'),
		string('close-label', undefined),
	],
	{
		readme: null,
		actions: ['gov-close'],
	}
);

export default { title: 'Components/Toast', ...meta };

const PROPS = ['variant', 'type', 'gravity', 'position', 'wcag-close-label', 'close-label', 'time'];

function createToast(args) {
	const el = document.createElement('gov-toast');
	el.innerHTML = args.message;

	args.icon && createIcon(args.icon, 'icon', undefined, el);
	bindProps(el, PROPS, args);

	return el;
}

const Template = (args) => {
	const container = document.createElement('div');
	container.style.height = '200px';
	container.appendChild(createToast(args));

	return container;
};

export const Playground = renderStory(Template);
export const Position = renderStory(Template, {
	gravity: 'bottom',
	position: 'left',
});
export const Variant = renderStory(Template, {
	variant: ToastVariants.WARNING,
});
export const Type = renderStory(Template, {
	type: ToastTypes.SOLID,
});
export const Timer = renderStory(Template, {
	type: ToastTypes.SOLID,
	time: 10000,
});
