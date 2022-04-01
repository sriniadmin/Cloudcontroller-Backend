let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for customlists table",
    "$id": "customlists",
    "title": "customlists",
    "type": "object",
    "required": [
        "cl_list_slno",
        "cl_list_id",
        "cl_list_type"
    ],
    "definitions": {
        "cl_list_slno": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.2089258196146292e+24
        },
        "cl_list_id": {
            "description": "ID OF THE lIST FOR NEW TAKE SELECT MAX(cl_list_id)+1",
            "type": "integer",
            "minimum": 0,
            "maximum": 1.2089258196146292e+24
        },
        "cl_list_item_id": {
            "description": "ID OF THE lIST FOR NEW TAKE SELECT MAX(cl_list_item_id)+1",
            "type": "integer",
            "minimum": 0,
            "maximum": 1.2089258196146292e+24,
            "default": null
        },
        "cl_list_type": {
            "description": "0=>List Name 1=>list items 2=>Context 3=>Template 4=>Sentence 5=> SavedTemplate 6=>CustomButton",
            "type": "integer",
            "minimum": 0,
            "maximum": 1.2089258196146292e+24
        },
        "cl_list_item_short": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "cl_list_item_long": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "cl_list_item_level": {
            "description": "Flow level for List Designation",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "cl_order": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "cl_deleted": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "cl_creator": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        }
    },
    "properties": {
        "cl_list_slno": {
            "$ref": "#/definitions/cl_list_slno"
        },
        "cl_list_id": {
            "$ref": "#/definitions/cl_list_id"
        },
        "cl_list_item_id": {
            "$ref": "#/definitions/cl_list_item_id"
        },
        "cl_list_type": {
            "$ref": "#/definitions/cl_list_type"
        },
        "cl_list_item_short": {
            "$ref": "#/definitions/cl_list_item_short"
        },
        "cl_list_item_long": {
            "$ref": "#/definitions/cl_list_item_long"
        },
        "cl_list_item_level": {
            "$ref": "#/definitions/cl_list_item_level"
        },
        "cl_order": {
            "$ref": "#/definitions/cl_order"
        },
        "cl_deleted": {
            "$ref": "#/definitions/cl_deleted"
        },
        "cl_creator": {
            "$ref": "#/definitions/cl_creator"
        }
    }
}
 module.exports = schema