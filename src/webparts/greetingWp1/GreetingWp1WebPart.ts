import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IPropertyPaneConfiguration, PropertyPaneTextField } from '@microsoft/sp-property-pane';


import styles from './GreetingWp1WebPart.module.scss';

export interface IGreetingWp1WebPartProps {
  description: string;
}

export default class GreetingWp1WebPart extends BaseClientSideWebPart<IGreetingWp1WebPartProps> {
  public render(): void {
    const greetingMessage = this.getGreetingMessage();
    this.domElement.innerHTML = `
    <div class="${styles.greetingWp1}">
        <div class="${styles.container}">
          <div class="${styles.row}">
            <div class="${styles.column}">
              <p class="${styles.subTitle}">${greetingMessage}</p>
            </div>
          </div>
        </div>
      </div>`;
  }

  private getGreetingMessage(): string {
    const now = new Date();
    const hours = now.getHours();
    if (hours < 12) {
      return `Good Morning, ${this.context.pageContext.user.displayName}!`;
    } else if (hours < 18) {
      return `Good Afternoon, ${this.context.pageContext.user.displayName}!`;
    } else {
      return `Good Evening, ${this.context.pageContext.user.displayName}!`;
    }
  }

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: this.properties.description
          },
          groups: [
            {
              groupName: 'Settings',
              groupFields: [
                PropertyPaneTextField('description', {
                  label: 'Description'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}