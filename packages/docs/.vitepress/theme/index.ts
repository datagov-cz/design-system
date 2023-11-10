// @ts-ignore
import matomo from "@zvitek/vitepress-plugin-matomo";

// @ts-ignore
import Layout from './components/Layout.vue'

import './style.css'
import './fonts.scss'
import '../../../styles/lib/critical.css'
import '../../../styles/lib/styles.css'
import '../../../styles/lib/layout.css'

import {defineCustomElements} from "../../../../dist/packages/core/loader"

defineCustomElements()

export default {
  Layout,
  enhanceApp({app, ...p}) {
    matomo({
      router: p.router,
      siteID: 7, // Replace with your site id
      trackerUrl: "https://matomoas.westeurope.cloudapp.azure.com" // Replace with your matomo url
    }),
    app.directive("responsive-table", (el: HTMLElement) => {
      Array.from(el.querySelectorAll('table')).map((table) => {
        const parent = table.parentNode;
        const wrapper = document.createElement('div');
        wrapper.classList.add('responsive-table')
        parent.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      })
    });
    app.directive("external-link", (el: HTMLElement) => {
      const links: HTMLLinkElement[] = Array.from(el.querySelectorAll('a[target="_blank"]'))
      links.map((a: HTMLLinkElement) => {
        if (a.href.indexOf('mailto') !== -1) {
          return
        }
        if (a.querySelector('gov-icon') === null) {
          const id = Math.random() * 1
          const icon = document.createElement('gov-icon')
          icon.setAttribute('type', 'basic')
          icon.setAttribute('id', id.toString())
          icon.setAttribute('key', id.toString())
          icon.setAttribute('name', 'box-arrow-up-right')
          icon.classList.add('w-4')

          a.classList.add('gov-link')

          a.appendChild(icon)
        }
      })
    });
  },
}
