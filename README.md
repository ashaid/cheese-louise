<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">cheese-louisee</h3>

  <p align="center">
    discord bot that sends daily cheese
    <br />
    <br />
    <br />

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Fun side project I developed for my friends.

This bot will send a cheese of the day embed to your channel of choosing with custom generated text and an image.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [discordjs][discordjs-url]
- [express][express-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- pnpm

  ```sh
  curl -fsSL https://get.pnpm.io/install.sh | sh -
  ```

  ```sh
  npm install -g pnpm
  ```

### Installation

1. Get a free API Keys from discord, hugging face, nlpcloud, and your discord server id
2. Clone the repo
   ```sh
   git clone https://github.com/ashaid/cheese-louise.git
   ```
3. Install NPM packages
   ```sh
   pnpm install
   ```
4. Enter your APIs in `config.js`

   ```js
   {
   "token": "...",
   "clientId": "...",
   "bearerKey": "Bearer ...",
   "tokenKey": "Token ...",
   "guildId": "..."
   }
   ```

### Server Setup

Install [pm2](https://github.com/Unitech/pm2) and start your application and ensure it logs in succesfully.

Setup a crontab to ping the express server in your given interval

```sh
* * * * * cd /path/to/cheese-louise/api/ && /path/to/node generateCheese.js
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Use the slash command /ping to confirm the bot is setup and connected.
![Example Ping](https://cdn.discordapp.com/attachments/1056814482199937025/1129932568205209660/image.png)
Use the /subscribe command to add the channel to the database.
![Example Database Add](https://cdn.discordapp.com/attachments/1056814482199937025/1129932809977483294/image.png)
Wait for your cheese to be sent!
![Example Cheese](https://cdn.discordapp.com/attachments/1056814482199937025/1129932314474983425/image.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[issues-shield]: https://img.shields.io/github/issues/ashaid/cheese-louise.svg?style=for-the-badge
[issues-url]: https://github.com/ashaid/cheese-louisee/issues
[license-shield]: https://img.shields.io/github/license/ashaid/cheese-louise.svg?style=for-the-badge
[license-url]: https://github.com/ashaid/cheese-louise/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/anthony-shaidaee
[discordjs-url]: https://github.com/discordjs/discord.js
[discordjs-shield]: https://discord.js.org/logo.svg
[express-url]: https://github.com/expressjs/express
