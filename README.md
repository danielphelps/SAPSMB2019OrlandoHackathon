# SMB 2019 Orlando Hackathon 
This repository contains the winning entry for the 2019 SAP SMB Innovation 
Summit Hackathon in Orlando.  It uses a webcam to capture the user's 
reaction to items in a Business One database.  This program is adapted 
from the "cfDemoSummit18" example provided by the B1SA team.

The ui is built with create-react-app, and the python scripts use a library built on top of TensorFlow and opencv.

You can substitute the images for whatever you like in `ui/src/Items.jsx` by providing a list of dictionaries each containing a key `U_ImageURL`.

You can watch the video on [YouTube](https://www.youtube.com/watch?v=CDTryd4YPoQ).

Special thanks to all the Team Reactor members and SAP Staff present during the event.
* Alejandro Flores-Méndez PhD., VRTCL
* Daniel Phelps, Heat Transfer Research, Inc.
* Denis Doiron, Stellar One Consulting
* Mario Reyes, VRTCL

[![SAP](https://i.imgur.com/kkQTp3m.png)](https://cloudplatform.sap.com)

This is a sample step by step guide of how to build cloud applications based on [Cloud Foundry](https://www.cloudfoundry.org/). 
It is coded in [NodeJ](https://nodejs.org/en/) and also makes use of [PostGreSQL](https://cloudplatform.sap.com/dmp/capabilities/us/product/PostgreSQL-on-SAP-Cloud-Platform/) available in the [SAP Cloud Platform](https://cloudplatform.sap.com). 
It is integrated with [SAP Business One](https://www.sap.com/uk/products/business-one.html) using the [Service Layer](https://www.youtube.com/watch?v=zaF_i7x9-s0&list=PLMdHXbewhZ2QsgYSICRQuoL8lkoEHjNzS&index=22) to list and update Items. 
The idea of this application is based in the [beer-list](https://github.com/mariantalla/beer-list) app.


## Pre Requisites
* A free trial account on  [SAP Cloud Platform](https://cloudplatform.sap.com) with **Cloud Foundry Trial** initialized
* Install and configure the [Cloud Foundry Command Line Interface (CLI)](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/75125ef1e60e490e91eb58fe48c0f9e7.html#loio4ef907afb1254e8286882a2bdef0edf4) on your machine
* A SAP Business One Enviroment with Service Layer 

## How to start?
There are 4 steps organized in branches in this repository. The step_4 is synchronized with the master branch.
Clone this repository and proceed to [Step 1](http://github.com/Ralphive/cfDemoSummit18/tree/step_1) for further instruction.

## Alternative Implementation
There is also available a [.Net version](https://github.com/B1SA/cfNetDemo) of this app.

## License
cfDemoSummit18  is released under the terms of the MIT license. See [LICENSE](LICENSE) for more information or see https://opensource.org/licenses/MIT.
