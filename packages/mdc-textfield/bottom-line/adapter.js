/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Adapter for MDC Textfield.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Textfield into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
class MDCTextfieldBottomLineAdapter {

  /**
   * Adds a class to the bottom line element.
   * @param {string} className
   */
  addClassToBottomLine(className) {}

  /**
   * Removes a class from the bottom line element.
   * @param {string} className
   */
  removeClassFromBottomLine(className) {}

  /**
   * Registers an event listener on the bottom line element for a "transitionend" event.
   * @param {function(!Event): undefined} handler
   */
  registerTransitionEndHandler(handler) {}

  /**
   * Deregisters an event listener on the bottom line element for a "transitionend" event.
   * @param {function(!Event): undefined} handler
   */
  deregisterTransitionEndHandler(handler) {}

  /**
   * Sets an attribute with a given value on the bottom line element.
   * @param {string} attr
   * @param {string} value
   */
  setBottomLineAttr(attr, value) {}
}

export default MDCTextfieldBottomLineAdapter;