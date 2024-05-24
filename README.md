# SPFx Greeting Web Part

Welcome to the SPFx Greeting Web Part repository! This project is a SharePoint Framework (SPFx) solution designed to display personalized greetings to users based on the time of day. It enhances user experience by adding a more personalized touch to SharePoint sites.

## Features

- **Dynamic Greetings**: Displays "Good Morning", "Good Afternoon", or "Good Evening" based on the user's local time.
- **SharePoint Integration**: Fully integrated into SharePoint, easily deployable as part of any modern SharePoint site.
- **Responsive Design**: Ensures that the greeting display is optimized for both desktop and mobile views.

## Prerequisites

Before deploying and running this web part, ensure you have the following:

- SharePoint Online subscription.
- Node.js LTS version 18.x or higher.
- SharePoint Framework (SPFx) development environment [set up](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-development-environment).

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   
   ```bash
   git clone https://github.com/himani-chi/SPFx.WP.Greeting.git

3. **Navigate to the project directory**

   ```bash
   cd SPFx.WP.Greeting       
  
6. **Install dependencies:**

   ```bash
   npm install
   
7. **Serve the solution locally:**

   ```bash
   gulp serve

 This command opens the SharePoint workbench, allowing you to test the web part locally.

 ## Deployment

 1. **Bundle the Solution:**

      Prepare the project for deployment by bundling the assets. This command prepares and optimizes the project files for production.

    ```bash
    gulp bundle --ship
       
 3. **Package the Solution:**

     Create a SharePoint package (.sppkg) file. This step generates a package in the sharepoint/solution folder that you can deploy to your SharePoint App Catalog.
 
    ```bash
    gulp package-solution --ship  
 
 5. **Upload and Deploy the Package:**
    - Go to your SharePoint Online App Catalog site.
    - Upload the .sppkg file from the sharepoint/solution directory to the 'Apps for SharePoint' library.
    - Deploy the package by clicking the "Deploy" button when prompted.


  ## Contributing
  
  Contributions to the SPFx Greeting Web Part are welcome! If you would like to contribute, please:

  - Fork the repository.
  - Create a feature branch: `git checkout -b my-new-feature`
  - Commit your changes: `git commit -am 'Add some feature`
  - Push to the branch: `git push origin my-new-feature`
  - Submit a pull request.


## License

This project is licensed under the MIT License - see the LICENSE file for details.


## Support

If you encounter any problems or have suggestions, please [open an issue](https://github.com/himani-chi/SPFx.WP.Greeting/issues) on GitHub. Community support and contributions are highly appreciated!


## Acknowledgments

- Thanks to the SharePoint Framework Community for guidance and support.
- [Microsoft Documentation](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/serve-your-web-part-in-a-sharepoint-page) for detailed setup and deployment instructions.



