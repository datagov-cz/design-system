import { StepperSizes, StepperVariants } from '../../../core/src/components/gov-stepper/constants';
import { bindProps } from '../helpers/binding';
import { getCopy } from '../helpers/copy';
import { createIcon, basicIcons } from '../helpers/icons';
import { renderStory, story } from '../helpers/storybook';

const meta = story(
	({ array, enums, string }) => [
		string('label', undefined, 'Details of the application'),
		enums('variant', undefined, StepperVariants, StepperVariants.PRIMARY),
		enums('size', undefined, StepperSizes, StepperSizes._M),
		array('label-tag', undefined, ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'], 'h3'),
		string('content', undefined),
		string('annotation', undefined, 'Reason for application: expiry of licence'),
		string('prefix', undefined, '1'),
		array('icon', undefined, basicIcons),
		string('wcag-label', undefined, 'Aid application procedure'),
	],
	{
		readme: null,
		actions: ['gov-change'],
	}
);

export default { title: 'Components/Stepper', ...meta };

const PROPS = ['size', 'wcag-label'];
const PROPS_ITEM = ['variant', 'annotation', 'disabled', 'label', 'prefix', 'label-tag'];

const Template = (args: any, withParent = false) => {
	const item = document.createElement('gov-stepper-item');
	item.innerHTML = args.content || getCopy();

	if (args.content) {
		const content = document.createElement('p');
		content.setAttribute('slot', 'content');
		content.innerHTML = args.content;
		item.appendChild(content);
	}

	if (args.icon) {
		createIcon(args.icon, 'prefix', undefined, item);
	} else if (args.prefix) {
		const prefix = document.createElement('span');
		prefix.setAttribute('slot', 'prefix');
		prefix.innerHTML = args.prefix;
		item.appendChild(prefix);
	}

	bindProps(item, PROPS_ITEM, args);

	if (withParent) {
		const container = document.createElement('gov-stepper');
		bindProps(container, PROPS, args);

		container.appendChild(item);
		return container;
	}

	return item;
};

const TemplateList = (args: any) => {
	const el = document.createElement('gov-stepper');

	if (Array.isArray(args.items)) {
		args.items.map((item: any) => el.appendChild(Template(item)));
	}

	bindProps(el, PROPS, args);
	return el;
};

const items = (annotation = false, icon = false, variant = false, content = false) => {
	return [
		{
			variant: variant ? 'primary' : undefined,
			label: 'Legislation',
			icon: icon ? 'complex/packet' : undefined,
			prefix: 1,
			content: content ? getCopy() : undefined,
		},
		{
			variant: variant ? 'error' : undefined,
			label: 'Appeal options',
			icon: icon ? 'complex/pills' : undefined,
			annotation: annotation
				? 'In some cases, it is necessary to describe the problem in detail to better guide the user.'
				: undefined,
			prefix: 2,
			content: content ? getCopy() : undefined,
		},
		{
			variant: variant ? 'success' : undefined,
			label: 'Negotiating language',
			icon: icon ? 'complex/holiday' : undefined,
			prefix: 3,
			content: content ? getCopy() : undefined,
		},
		{
			variant: variant ? 'warning' : undefined,
			label: 'Options for processing your application at a nearby office',
			icon: icon ? 'complex/illness' : undefined,
			annotation: annotation
				? 'In some cases, it is necessary to describe the problem in detail to better guide the user.'
				: undefined,
			prefix: 4,
			content: content ? getCopy() : undefined,
		},
	];
};

export const Playground = renderStory(Template, {});

export const Sizes = renderStory(TemplateList, {
	size: StepperSizes._XS,
	items: items(false, false, false, false),
});

export const Variants = renderStory(TemplateList, {
	items: items(false, false, true),
});

export const Icons = renderStory(TemplateList, {
	items: items(false, true, false),
});

export const Annotation = renderStory(TemplateList, {
	items: items(true, true, false),
});

export const Content = renderStory(TemplateList, {
	items: items(true, true, false, true),
});
