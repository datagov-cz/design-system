import { bindProps } from '../helpers/binding';
import { getCopy } from '../helpers/copy';
import { createButton } from '../helpers/generate';
import { createIcon, basicIcons } from '../helpers/icons';
import { renderStory, story } from '../helpers/storybook';

const meta = story(
	({ string, array }) => [
		string('label', undefined, 'Design system gov.cz'),
		array('icon', undefined, basicIcons),
		string('wcag-close-label', undefined, 'Close dialog box with more information'),
	],
	{
		readme: null,
		actions: ['gov-close'],
	}
);

export default { title: 'Components/Modal', ...meta };

const PROPS = ['label', 'wcag-close-label'];

const Template = (args) => {
	const container = document.createElement('div');
	const trigger = createButton({ value: 'Open modal', wcagLabel: 'Open dialog box for more information' });
	const modal = document.createElement('gov-modal');

	container.style.height = '600px';
	modal.innerHTML = getCopy() + getCopy() + getCopy() + getCopy() + getCopy();

	trigger.addEventListener('gov-click', function () {
		modal.setAttribute('open', 'true');
	});

	args.icon && createIcon(args.icon, 'icon', null, modal);

	container.appendChild(trigger);
	container.appendChild(modal);

	bindProps(modal, PROPS, args);
	return container;
};

export const Playground = renderStory(Template);
