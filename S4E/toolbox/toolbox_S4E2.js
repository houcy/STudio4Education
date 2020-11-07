 /**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * @fileoverview 'Toolbox' menu as objetc for Blockly inject.
 * @author scanet@libreduc.cc (Sébastien CANET)
 */

var BLOCKLY_TOOLBOX_XML = BLOCKLY_TOOLBOX_XML || Object.create(null);

BLOCKLY_TOOLBOX_XML['toolboxS4E'] =
// From XML string/file, replace ^\s?(\s*)?(<.*>)$ with \+$1'$2'
// Tweak first and last line.
'<xml xmlns="https://developers.google.com/blockly/xml" id="blocklyToolbox">'
+ '<category name="%{BKY_CATLOGIC}" categorystyle="logic_category" toolboxitemid="CAT_LOGIC">'
+   '<block type="controls_if"></block>'
+   '<block type="logic_compare"></block>'
+   '<block type="logic_operation"></block>'
+   '<block type="logic_negate"></block>'
+   '<block type="logic_boolean"></block>'
+   '<block type="logic_null"></block>'
+   '<block type="logic_ternary"></block>'
+   '<block type="controls_switch"></block>'
+ '</category>'
+ '<category name="%{BKY_CATLOOPS}" categorystyle="loop_category" toolboxitemid="CAT_LOOPS">'
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
+ '<category name="%{BKY_CATMATH}" categorystyle="math_category" toolboxitemid="CAT_MATH">'
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
+ '<category name="%{BKY_CATTEXT}" categorystyle="text_category" toolboxitemid="CAT_TEXT">'
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
+ '<category name="%{BKY_CATLISTS}" categorystyle="list_category" toolboxitemid="CAT_LIST">'
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
+ '<category name="%{BKY_CATCOLOUR}" categorystyle="colour_category" toolboxitemid="CAT_COLOUR">'
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
+ '<category name="%{BKY_CATVARIABLES}" categorystyle="variable_category" toolboxitemid="CAT_VARIABLES">'
+    '<category name="%{BKY_CAT_VAR_NUM}" categorystyle="variable_category" custom="VARIABLE_TYPED_NUM"></category>'
+    '<category name="%{BKY_CAT_VAR_TEXT}" categorystyle="variable_category" custom="VARIABLE_TYPED_TEXT"></category>'
+    '<category name="%{BKY_CAT_VAR_BOOLEAN}" categorystyle="variable_category" custom="VARIABLE_TYPED_BOOLEAN"></category>'
+ '</category>'
+ '<category name="%{BKY_CATFUNCTIONS}" categorystyle="procedure_category" custom="PROCEDURE" toolboxitemid="CAT_FUNCTIONS"></category>'
+    '<sep toolboxitemid="sep"></sep>'
+    '<category name="%{BKY_CAT_BOARD}" categorystyle="board_category" toolboxitemid="BOARD_IO">'
+        '<category name="%{BKY_CAT_BOARD_IO}" categorystyle="board_category">'
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
+        '<category name="%{BKY_CAT_BOARD_SERIAL}" categorystyle="board_category">'
+           '<block type="board_serial_init"></block>'
+           '<block type="board_serial_printfor"></block>'
+           '<block type="board_serial_print"></block>'
+           '<block type="board_serial_available"></block>'
+           '<block type="board_serial_read"></block>'
+           '<block type="board_serial_readStringUntil"></block>'
+           '<block type="board_serial_flush"></block>'
+        '</category>'
+    '</category>'
+    '<category name="%{BKY_CAT_IKS01A3}" categorystyle="X-NUCLEO-IKS01A3_category" toolboxitemid="X-NUCLEO-IKS01A3">'
+        '<block type="X_NUCLEO_IKS01A3_Temp_Read"></block>'
+        '<block type="X_NUCLEO_IKS01A3_Humidity_Read"></block>'
+    '</category>'
+    '<category name="%{BKY_CAT_SERVO}" categorystyle="servo_category" toolboxitemid="SERVO">'
+        '<block type="servo_move">'
+            '<value name="DEGREE">'
+               '<shadow type="math_number">'
+                    '<field name="NUM">90</field>'
+                '</shadow>'
+            '</value>'
+        '</block>'
+        '<block type="servo_read_degrees"></block>'
+    '</category>'
+ '<category name="END" categorystyle="board_category" disabled="true" hidden="true" toolboxitemid="END"></category>'
+ '</xml>';