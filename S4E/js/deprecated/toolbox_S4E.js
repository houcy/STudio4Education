 /**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * @fileoverview 'Toolbox' menu as object for Blockly inject.
 * @author scanet@libreduc.cc (Sébastien CANET)
 */

var BLOCKLY_TOOLBOX_XML = BLOCKLY_TOOLBOX_XML || Object.create(null);

BLOCKLY_TOOLBOX_XML['toolboxS4E'] =
// From XML string/file, replace ^\s?(\s*)?(<.*>)$ with \+$1'$2'
// Tweak first and last line.
'<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox">'
+ '<category name="%{BKY_CATLOGIC}" css-icon="customIcon fa fa-project-diagram" categorystyle="logic_category" toolboxitemid="LOGIC" level="1">'
+   '<block type="controls_if"></block>'
+   '<block type="logic_compare"></block>'
+   '<block type="logic_operation"></block>'
+   '<block type="logic_negate"></block>'
+   '<block type="logic_boolean"></block>'
+   '<block type="logic_null"></block>'
+   '<block type="logic_ternary"></block>'
+   '<block type="controls_switch"></block>'
+ '</category>'
+ '<category name="%{BKY_CATLOOPS}" css-icon="customIcon fa fa-retweet" categorystyle="loop_category" toolboxitemid="LOOPS" level="1">'
+   '<block type="controls_repeat_ext">'
+     '<value name="TIMES">'
+       '<shadow type="math_number">'
+         '<field name="NUM">10</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="controls_repeat"></block>'
+   '<block type="controls_whileUntil"></block>'
+   '<block type="controls_for">'
+     '<value name="FROM">'
+       '<shadow type="math_number">'
+         '<field name="NUM">1</field>'
+       '</shadow>'
+     '</value>'
+     '<value name="TO">'
+       '<shadow type="math_number">'
+         '<field name="NUM">10</field>'
+       '</shadow>'
+     '</value>'
+     '<value name="BY">'
+       '<shadow type="math_number">'
+         '<field name="NUM">1</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="controls_forEach"></block>'
+   '<block type="controls_flow_statements"></block>'
+ '</category>'
+ '<category name="%{BKY_CATMATH}" css-icon="customIcon fa fa-calculator" categorystyle="math_category" toolboxitemid="MATH" level="1">'
+   '<block type="math_number" gap="32">'
+     '<field name="NUM">123</field>'
+   '</block>'
+   '<block type="math_arithmetic">'
+     '<value name="A">'
+       '<shadow type="math_number">'
+         '<field name="NUM">1</field>'
+       '</shadow>'
+     '</value>'
+     '<value name="B">'
+       '<shadow type="math_number">'
+         '<field name="NUM">1</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="math_single">'
+     '<value name="NUM">'
+       '<shadow type="math_number">'
+         '<field name="NUM">9</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="math_trig">'
+     '<value name="NUM">'
+       '<shadow type="math_number">'
+         '<field name="NUM">45</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="math_constant"></block>'
+   '<block type="math_number_property">'
+     '<value name="NUMBER_TO_CHECK">'
+       '<shadow type="math_number">'
+         '<field name="NUM">0</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="math_round">'
+     '<value name="NUM">'
+       '<shadow type="math_number">'
+         '<field name="NUM">3.1</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="math_on_list"></block>'
+   '<block type="math_modulo">'
+     '<value name="DIVIDEND">'
+       '<shadow type="math_number">'
+         '<field name="NUM">64</field>'
+       '</shadow>'
+     '</value>'
+     '<value name="DIVISOR">'
+       '<shadow type="math_number">'
+         '<field name="NUM">10</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="math_constrain">'
+     '<value name="VALUE">'
+       '<shadow type="math_number">'
+         '<field name="NUM">50</field>'
+       '</shadow>'
+     '</value>'
+     '<value name="LOW">'
+       '<shadow type="math_number">'
+         '<field name="NUM">1</field>'
+       '</shadow>'
+     '</value>'
+     '<value name="HIGH">'
+       '<shadow type="math_number">'
+         '<field name="NUM">100</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="math_random_int">'
+     '<value name="FROM">'
+       '<shadow type="math_number">'
+         '<field name="NUM">1</field>'
+       '</shadow>'
+     '</value>'
+     '<value name="TO">'
+       '<shadow type="math_number">'
+         '<field name="NUM">100</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+ '</category>'
+ '<category name="%{BKY_CATTEXT}" css-icon="customIcon fa fa-quote-left" categorystyle="text_category" toolboxitemid="TEXT" level="1">'
+   '<block type="text"></block>'
+   '<block type="text_join"></block>'
+   '<block type="text_append">'
+     '<value name="TEXT">'
+       '<shadow type="text"></shadow>'
+     '</value>'
+   '</block>'
+   '<block type="text_length">'
+     '<value name="VALUE">'
+       '<shadow type="text">'
+         '<field name="TEXT">abc</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="text_isEmpty">'
+     '<value name="VALUE">'
+       '<shadow type="text">'
+         '<field name="TEXT"></field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="text_indexOf">'
+     '<value name="VALUE">'
+       '<block type="variables_get">'
+         '<field name="VAR">text</field>'
+       '</block>'
+     '</value>'
+     '<value name="FIND">'
+       '<shadow type="text">'
+         '<field name="TEXT">abc</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="text_charAt">'
+     '<value name="VALUE">'
+       '<block type="variables_get">'
+         '<field name="VAR">text</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="text_getSubstring">'
+     '<value name="STRING">'
+       '<block type="variables_get">'
+         '<field name="VAR">text</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="text_changeCase">'
+     '<value name="TEXT">'
+       '<shadow type="text">'
+         '<field name="TEXT">abc</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="text_trim">'
+     '<value name="TEXT">'
+       '<shadow type="text">'
+         '<field name="TEXT">abc</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="text_count">'
+     '<value name="SUB">'
+       '<shadow type="text"></shadow>'
+     '</value>'
+     '<value name="TEXT">'
+       '<shadow type="text"></shadow>'
+     '</value>'
+   '</block>'
+   '<block type="text_replace">'
+     '<value name="FROM">'
+       '<shadow type="text"></shadow>'
+     '</value>'
+     '<value name="TO">'
+       '<shadow type="text"></shadow>'
+     '</value>'
+     '<value name="TEXT">'
+       '<shadow type="text"></shadow>'
+     '</value>'
+   '</block>'
+   '<block type="text_reverse">'
+     '<value name="TEXT">'
+       '<shadow type="text"></shadow>'
+     '</value>'
+   '</block>'
+ '</category>'
+ '<category name="%{BKY_CATLISTS}" css-icon="customIcon fa fa-list" categorystyle="list_category" toolboxitemid="LIST" level="1">'
+   '<block type="lists_create_with">'
+     '<mutation items="0"></mutation>'
+   '</block>'
+   '<block type="lists_create_with"></block>'
+   '<block type="lists_repeat">'
+     '<value name="NUM">'
+       '<shadow type="math_number">'
+         '<field name="NUM">5</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="lists_length"></block>'
+   '<block type="lists_isEmpty"></block>'
+   '<block type="lists_indexOf">'
+     '<value name="VALUE">'
+       '<block type="variables_get">'
+         '<field name="VAR">list</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="lists_getIndex">'
+     '<value name="VALUE">'
+       '<block type="variables_get">'
+         '<field name="VAR">list</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="lists_setIndex">'
+     '<value name="LIST">'
+       '<block type="variables_get">'
+         '<field name="VAR">list</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="lists_getSublist">'
+     '<value name="LIST">'
+       '<block type="variables_get">'
+         '<field name="VAR">list</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="lists_split">'
+     '<value name="DELIM">'
+       '<shadow type="text">'
+         '<field name="TEXT">,</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="lists_sort"></block>'
+   '<block type="lists_reverse"></block>'
+ '</category>'
+ '<category name="%{BKY_CATCOLOUR}" css-icon="customIcon fa fa-palette" categorystyle="colour_category" toolboxitemid="COLOUR" level="1">'
+   '<block type="colour_picker"></block>'
+   '<block type="colour_random"></block>'
+   '<block type="colour_rgb">'
+     '<value name="RED">'
+       '<shadow type="math_number">'
+         '<field name="NUM">100</field>'
+       '</shadow>'
+     '</value>'
+     '<value name="GREEN">'
+       '<shadow type="math_number">'
+         '<field name="NUM">50</field>'
+       '</shadow>'
+     '</value>'
+     '<value name="BLUE">'
+       '<shadow type="math_number">'
+         '<field name="NUM">0</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="colour_blend">'
+     '<value name="COLOUR1">'
+       '<shadow type="colour_picker">'
+         '<field name="COLOUR">#ff0000</field>'
+       '</shadow>'
+     '</value>'
+     '<value name="COLOUR2">'
+       '<shadow type="colour_picker">'
+         '<field name="COLOUR">#3333ff</field>'
+       '</shadow>'
+     '</value>'
+     '<value name="RATIO">'
+       '<shadow type="math_number">'
+         '<field name="NUM">0.5</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+ '</category>'
+ '<sep></sep>'
+ '<category name="%{BKY_CATVARIABLES}" css-icon="customIcon fa fa-question" categorystyle="variable_category" toolboxitemid="VARIABLES" level="1">'
+    '<category name="%{BKY_CAT_VAR_NUM}" categorystyle="variable_category" custom="VARIABLE_TYPED_NUM" toolboxitemid="VARIABLES_NUM" level="2"></category>'
+    '<category name="%{BKY_CAT_VAR_TEXT}" categorystyle="variable_category" custom="VARIABLE_TYPED_TEXT" toolboxitemid="VARIABLES_TEXT" level="2"></category>'
+    '<category name="%{BKY_CAT_VAR_BOOLEAN}" categorystyle="variable_category" custom="VARIABLE_TYPED_BOOLEAN" toolboxitemid="VARIABLES_BOOL" level="2"></category>'
+ '</category>'
+ '<category name="%{BKY_CATFUNCTIONS}" css-icon="customIcon fab fa-whmcs" categorystyle="procedure_category" custom="PROCEDURE" toolboxitemid="FUNCTIONS" level="1">'
+ '</category>'
+    '<category name="%{BKY_CAT_BOARD}" css-icon="customIcon fa fa-microchip" categorystyle="board_category" toolboxitemid="BOARD" level="1">'
+        '<category name="%{BKY_CAT_BOARD_IO}" categorystyle="board_category" toolboxitemid="BOARD_IO" level="2">'
+            '<block type="board_base_inout_buildin_led"></block>'
+            '<block type="board_base_inout_digital_write"></block>'
+            '<block type="board_base_inout_digital_read"></block>'
+            '<block type="board_base_inout_highlow"></block>'
+            '<block type="board_base_inout_analog_write">'
+                '<value name="PWM">'
+                    '<shadow type="math_number">'
+                        '<field name="NUM">0</field>'
+                    '</shadow>'
+                '</value>'
+            '</block>'
+            '<block type="board_base_inout_analog_read"></block>'
+            '<block type="board_base_delay">'
+                '<value name="DELAY_TIME">'
+                    '<shadow type="math_number">'
+                        '<field name="NUM">1000</field>'
+                    '</shadow>'
+                '</value>'
+            '</block>'
+            '<block type="board_base_angle"></block>'
+            '<block type="board_base_map"></block>'
+            '<block type="board_base_inout_tone">'
+                '<value name="NUM">'
+                    '<shadow type="math_number">'
+                       '<field name="NUM">440</field>'
+                  '</shadow>'
+                '</value>'
+           '</block>'
+           '<block type="board_base_inout_notone"></block>'
+        '</category>'
+        '<category name="%{BKY_CAT_BOARD_SERIAL}" categorystyle="board_category" toolboxitemid="BOARD_SERIAL" level="2">'
+           '<block type="board_serial_init"></block>'
+           '<block type="board_serial_printfor"></block>'
+           '<block type="board_serial_print"></block>'
+           '<block type="board_serial_available"></block>'
+           '<block type="board_serial_read"></block>'
+           '<block type="board_serial_readStringUntil"></block>'
+           '<block type="board_serial_flush"></block>'
+        '</category>'
+    '</category>'
+    '<category name="%{BKY_CAT_IKS01A3}" categorystyle="X-NUCLEO-IKS01A3_category" toolboxitemid="X-NUCLEO-IKS01A3" level="1">'
+        '<block type="X_NUCLEO_IKS01A3_Temp_Read"></block>'
+        '<block type="X_NUCLEO_IKS01A3_Humidity_Read"></block>'
+    '</category>'
+    '<category name="%{BKY_CAT_DS18B20}" imageName="./S4E/blocks/ds18b20/ds18b20.png" categorystyle="ds18b20_category" toolboxitemid="DS18B20" level="1">'
+        '<block type="ds18b20_search"></block>'
+        '<block type="ds18b20_temp"></block>'
+    '</category>'
+    '<category name="%{BKY_CAT_SERVO}" imageName="./S4E/blocks/servo/servo.png" categorystyle="servo_category" toolboxitemid="SERVO" level="1">'
+        '<block type="servo_move">'
+            '<value name="DEGREE">'
+               '<shadow type="math_number">'
+                    '<field name="NUM">90</field>'
+                '</shadow>'
+            '</value>'
+        '</block>'
+        '<block type="servo_read_degrees"></block>'
+    '</category>'
+    '<category name="%{BKY_CAT_RELAY}" imageName="./S4E/blocks/relay/relay.jpg" categorystyle="grove_category" toolboxitemid="RELAY" level="1">'
+        '<block type="RELAY_LOGICAL"></block>'
+        '<block type="RELAY_MOSFET"></block>'
+    '</category>'
+ '<category name="END" categorystyle="board_category" disabled="true" hidden="true" toolboxitemid="END" level="1"></category>'
+ '</xml>';