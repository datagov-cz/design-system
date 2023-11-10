import { bindProps } from '../helpers/binding';
import { createButton, createToast } from '../helpers/generate';
import { createIcon } from '../helpers/icons';
import { renderStory, story } from '../helpers/storybook';

const meta = story(
	({ string, array }) => [
		string('label', undefined, 'Delete file'),
		string('role', undefined, 'dialog'),
		string(
			'copy',
			undefined,
			'Do you really want to delete <strong>my-file.jpg</strong>?<br>This operation cannot be undone.'
		),
		array('label-tag', undefined, ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], 'h5'),
		string('wcag-labelled-by', undefined, undefined),
		string('wcag-described-by', undefined, undefined),
		string('wcag-close-label', undefined, 'Closes the prompt to delete the file my-photo.jpg'),
		string('wcag-close-labelled-by', undefined, undefined),
	],
	{
		readme: null,
		actions: ['gov-close'],
	}
);
export default { title: 'Components/Prompt', ...meta };

const PROPS = [
	'open',
	'label',
	'role',
	'label-tag',
	'wcag-labelled-by',
	'wcag-described-by',
	'wcag-close-label',
	'wcag-close-labelled-by',
];

const Template = (args) => {
	const container = document.createElement('div');
	container.style.height = '600px';
	const trigger = createButton({ value: 'Delete file', wcagLabel: 'Delete file' });
	const cancelButton = createButton({
		type: 'base',
		wcagLabel: 'Cancel delete file my-photo.jpg',
		value: 'Cancel',
		slot: 'actions',
	});
	const approveButton = createButton({
		type: 'solid',
		variant: 'error',
		wcagLabel: 'Confirm deletion of the file my-photo.jpg',
		value: 'Confirm',
		slot: 'actions',
	});
	const prompt = document.createElement('gov-prompt');

	prompt.innerHTML = args.copy;
	prompt.appendChild(cancelButton);
	prompt.appendChild(approveButton);

	trigger.addEventListener('gov-click', function () {
		prompt.setAttribute('open', 'true');
	});

	approveButton.addEventListener('gov-click', function () {
		createToast({ message: 'File removed', type: 'solid', time: 10000 }, true);
		prompt.setAttribute('open', 'false');
	});

	cancelButton.addEventListener('gov-click', function () {
		prompt.setAttribute('open', 'false');
	});

	args.icon && createIcon(args.icon, 'icon', null, prompt);

	container.appendChild(trigger);
	container.appendChild(prompt);

	bindProps(prompt, PROPS, args);
	return container;
};

export const Playground = renderStory(Template);
