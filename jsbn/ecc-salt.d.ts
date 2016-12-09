export function initializeEllipticCurveParameters() : any;
export function set_ec_params(name: any) : any;
export function set_secp128r1() : any;
export function set_secp160k1() : any;
export function set_secp160r1() : any;
export function set_secp192k1() : any;
export function set_secp192r1() : any;
export function set_secp224r1() : any;
export function set_secp256r1() : any;
export function get_curve() : any;
export function get_G(curve: any) : any;
export function generateSendersPrivateMultiplier(sendersPassword: any, sendersSalt: any) : any;
export function calculateSendersMultipliedPoint(sendersPrivateMultiplier: any) : any;
export function calculateSendersCommonSecretKey() : any;
export function generateReceiversPrivateMultiplier(receiversPassword: any, receiversSalt: any) : any;
export function calculateReceiversMultipliedPoint(receiversPrivateMultiplier: any) : any;
export function calculateReceiversCommonSecretKey() : any;
export function encryptMessage(messagePlainText: any) : any;
export function decryptMessage(messageCipherText: any) : any;
export function pick_rand() : any;
export function getN(n: any) : any;
export function generateRandomString(len: number) : any;
export function convertStringToHex(originalString: any) : any;
