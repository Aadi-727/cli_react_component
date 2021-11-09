##REACT COMPONENT CLI
---


```bash

  npm install -g @zoyo/rc
```
---
---
### How to use it

- Open your terminal
- **Change directory** to your components folder 
```bash
  cd ./<components dirname>
```
---

- Change directory to your components folder 
```bash
  cd ./<components dirname>
```
---
> Make sure that you have installed the package **globally -g**, otherwise it will not work from anywhere in your machine
---
---

### Getting Started

```bash
rc <ComponentName> -f -css -l -c
```

1. **ComponentName** is where you can name your component
2. The component name is a necessary felid which cannot be empty 💀
--- 
### List of commands that you can use 

> **-f or --folder**
> Puts the component inside a new folder with the same name as the component 

> **-css or --stylesheet**
> Creates a stylesheet for the component the you created. It also comes with a boiler plate code and it will also link the stylesheet to the js file


```js
import "./component.style.css"
```

```css
*,
*::before,
*::after {
	box-sizing: border-box;
}****

body {
	background: #fafafa;
	margin: 0;
	padding: 0;
	font-family: sans-serif;
	font-size: 16px;
	line-height: 1.5;
}

```

> **-l | --lower**
> By default rc capitalize the first letter of the component name. With the -l flag it tells rc to lowercase the component name. 
>> *Component* ➡️ *component*

> **--c | --custom**
> This flag will allow you to put any name of  your choice without formatting your component name
>>  -> *ThisIsAComponent* -> *cOmponent* etc ...

---
---
*This was just a fun project for me. I will try to improve this cli whenever possible*
**Thankyou**