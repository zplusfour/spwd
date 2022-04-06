import * as fs from "fs";
import { PWDS_LOCATION_JSON } from "./api/add";

export var items = JSON.parse(fs.readFileSync(PWDS_LOCATION_JSON, "utf8"));