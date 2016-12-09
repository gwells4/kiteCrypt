export function initializeEllipticCurveParameters() : any;
export function set_ec_params(name: string) : any;
export function set_secp128r1() : any;
export function set_secp160k1() : any;
export function set_secp160r1() : any;
export function set_secp192k1() : any;
export function set_secp192r1() : any;
export function set_secp224r1() : any;
export function set_secp256r1() : any;
export function get_curve() : any;
export function get_G = function (curve: any) : any;
export function generateSendersPrivateMultiplier() : any;
export function calculateSendersMultipliedPoint() : any;
export function calculateSendersCommonSecretKey() : any;
export function generateReceiversPrivateMultiplier() : any;
export function calculateReceiversMultipliedPoint() : any;
export function calculateReceiversCommonSecretKey() : any;
export function encryptMessage() : any;
export function decryptMessage() : any;
export function pick_rand() : any;
export function getN = function (n: any) : any;
export function generateRandomString(len: number) : string;
export function convertStringToHex = function (originalString: string) : string;