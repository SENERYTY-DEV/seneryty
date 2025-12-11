<h1 align="center">
	SenerDark Theme
</h1>

<p align="center">
	<a href="https://marketplace.visualstudio.com/items?itemName=seneryty.senerdark">
		<img src="https://img.shields.io/visual-studio-marketplace/v/seneryty.senerdark?style=popout-square" alt="Marketplace version" />
	</a>
	<a href="https://marketplace.visualstudio.com/items?itemName=seneryty.senerdark#review-details">
		<img src="https://img.shields.io/visual-studio-marketplace/stars/seneryty.senerdark?style=popout-square" alt="Rating" />
	</a>
</p>

<p align="center">A sleek, dark VS Code theme with clear syntax highlighting.</p>

## Included Themes
- **SenerDark** – The classic dark theme.
- **SenerDeepGray** – Darker, deep gray theme.
- **SenerBlueGray** – Dark theme with blue-gray accents.

## Preview

<p align="center">
	<img src="https://raw.githubusercontent.com/SENERYTY-DEV/seneryty/main/screenshots/senerdark.png" alt="SenerDark preview" style="max-width:100%;height:auto;" />
</p>

## Screenshots

### SenerDark
![SenerDark](https://raw.githubusercontent.com/SENERYTY-DEV/seneryty/main/screenshots/senerdark.png)

### SenerDeepGray
![SenerDeepGray](https://raw.githubusercontent.com/SENERYTY-DEV/seneryty/main/screenshots/deepgray.png)

### SenerBlueGray
![SenerBlueGray](https://raw.githubusercontent.com/SENERYTY-DEV/seneryty/main/screenshots/bluegray.png)

## Installation

Install from the VS Code Marketplace or use the generated `.vsix`:

```bash
# copy screenshots (optional)
node ./scripts/copy-screenshots.js
# package
npx vsce package
# install resulting vsix
code --install-extension senerdark-*.vsix
```

## License
MIT
