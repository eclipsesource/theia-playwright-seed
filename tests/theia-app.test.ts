/********************************************************************************
 * Copyright (C) 2022 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
import { expect } from '@playwright/test';
import { TheiaApp } from '@theia/playwright/lib/src/theia-app';
import test, { page } from '@theia/playwright/lib/tests/fixtures/theia-fixture';

let app: TheiaApp;

test.describe('Theia Application', () => {

    test('should load', async () => {
        app = await TheiaApp.load(page);
    });

    test('should show main content panel', async () => {
        expect(await app.isMainContentPanelVisible()).toBe(true);
    });

});