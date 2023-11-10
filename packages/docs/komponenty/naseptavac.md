---
title: Našeptávač
---

<script setup>
import DocumentationLinks from "../.vitepress/theme/components/DocumentationLinks.vue";
import {ref, onMounted} from "vue";
const autocompleteRef = ref(null);

const data = () => [
	{ name: "Pepa" },
	{ name: "Katak" },
	{ name: "Tomáš" },
	{ name: "Ludvík" },
	{ name: "Anežda" },
	{ name: "Xaviér" },
	{ name: "Ondřej" },
	{ name: "Mirek" },
	{ name: "Zdeněk" },
	{ name: "Monika" },
	{ name: "Jirka" },
	{ name: "Abrahám" },
	{ name: "Lucie" },
	{ name: "Emily" },
	{ name: "Pavel" },
	{ name: "Gustav" },
	{ name: "Amálie" },
];

const removeDiacritics = (string) => {
	if (!string) return string;
	return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

const randomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

onMounted(() => {
    if(autocompleteRef.value) {
        autocompleteRef.value.setSearchCallback((val) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(
                        data().filter(({ name }) => {
                            if (!name) return false;
                            return removeDiacritics(name).toLowerCase().indexOf(removeDiacritics(val).toLowerCase()) > -1
                        })
                    )
                }, randomNumber(100, 1000))
            })
        })
    }
})

</script>

angl. `autocomplete`<br>

<div class="sample-content">
    <gov-form-control>
        <gov-form-autocomplete size="m" ref="autocompleteRef"></gov-form-autocomplete>
        <gov-form-label slot="top" size="m">Našeptávač jmen</gov-form-label>
    </gov-form-control>
</div>

<DocumentationLinks
storybookUrl="/storybook/?path=/docs/components-form-autocomplete--docs"
documentationUrl="/komponenty/dokumentace/gov-autocomplete" />
