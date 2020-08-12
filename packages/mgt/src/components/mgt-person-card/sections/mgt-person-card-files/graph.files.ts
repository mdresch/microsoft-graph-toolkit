/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { IGraph } from '../../../../IGraph';

/**
 * foo
 */
export enum IconType {
  // tslint:disable-next-line: completed-docs
  Word,
  // tslint:disable-next-line: completed-docs
  PowerPoint
}

/**
 * foo
 */
export interface IFile {
  // tslint:disable-next-line: completed-docs
  iconType: IconType;
  // tslint:disable-next-line: completed-docs
  fileName: string;
  // tslint:disable-next-line: completed-docs
  lastModified: Date;
}

// tslint:disable-next-line: completed-docs
export async function getSharedFiles(graph: IGraph, userId: string): Promise<IFile[]> {
  const response = await graph.api(`users/${userId}/drive/root/children`).get();
  // return response.value;

  return getDummyData();
}

// tslint:disable-next-line: completed-docs
function getDummyData(): IFile[] {
  return [
    {
      fileName: 'EPIC PAX Status _ Partners - Analytics - Essential eXperiences',
      iconType: IconType.Word,
      lastModified: new Date(2020, 7, 3)
    },
    {
      fileName: 'PAX MAX M365 Rampup',
      iconType: IconType.PowerPoint,
      lastModified: new Date(2020, 7, 12, 8, 40, 13)
    },
    {
      fileName: 'EPIC PAX Status _ Partners - Analytics - Essential eXperiences',
      iconType: IconType.Word,
      lastModified: new Date(2020, 6, 30)
    },
    {
      fileName: 'PAX MAX M365 Rampup',
      iconType: IconType.PowerPoint,
      lastModified: new Date(2020, 6, 20)
    },
    {
      fileName: 'EPIC PAX Status _ Partners - Analytics - Essential eXperiences',
      iconType: IconType.Word,
      lastModified: new Date(2019, 11, 3)
    },
    {
      fileName: 'PAX MAX M365 Rampup',
      iconType: IconType.PowerPoint,
      lastModified: new Date(2018, 10, 27)
    }
  ];
}