# Image From Query Grafana Panel

You could render image from your datasources directly in grafana dashboards within it!
Just configure query and resize your new panel :)

# How to install plugin

1. Clone this repo
2. Navigate to repo's folder
3. Run 'Grafana' container (how to do it [see docs](https://grafana.com/docs/grafana/latest/installation/docker/ 'Grafana Docker installation'))
4. create folder for plugin in Grafana's container

   ```bash
   sudo docker exec -it <GRAFANA> bash
   cd /var/lib/garafana/plugins/
   mkdir image-panel
   ```

   _Where <**GRAFANA**> your grafana's container name or ID and **image-panel** plugin's folder - you could name it as you wish._

5. Navigate to _~/repository_dir/dist_
6. Run docker command for putting plugin's sources into grafana-docker container

   ```bash
   sudo docker cp ./ <GRAFANA>:/var/lib/grafana/plugins/image-panel
   ```

   _Where <**GRAFANA**> your grafana's container name or ID and **image-panel** plugin's folder from step 4._

7. Restart grafana's container via command:

   ```bash
   sudo docker restart <GRAFANA>
   ```

   _Where <**GRAFANA**> your grafana's container name or ID_

8. Configure Datasource in grafana _(that could provide raw image (URl or base64)_:

9. Create image panel with corresponding datasource

   9.1 Configure query

   ![Configure query](https://raw.githubusercontent.com/mav10/grafana-queryimage-panel/master/src/img/query.png)

   9.2 Add failed image link (when data loading of query result is failed)

   ![Configure options](https://raw.githubusercontent.com/mav10/grafana-queryimage-panel/master/src/img/options.png)

As result you could configure something like that:

![Configure options](https://raw.githubusercontent.com/mav10/grafana-queryimage-panel/master/src/img/panel.png)

# How to make changes

1. Clone repo
2. Navigate to repo's folder
3. Run command `yarn install`
4. Make some changes in _./src_ folder
5. Run `yarn build` (your code must match the eslint rules - if not - correct)
6. Execute steps 4 - 9 from 'How to install'
