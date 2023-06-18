"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadUtilities = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const { BlobServiceClient, StorageSharedKeyCredential } = require("@azure/storage-blob");
// const AccountName = config.get('AZURE_STORAGE.ACCOUNT_NAME');
// const AccountKey = config.get('AZURE_STORAGE.ACCOUNT_KEY');
// const containerName = config.get('AZURE_STORAGE.CONTAINER_NAME');
// const BUCKETURL = `https://${AccountName}.blob.core.windows.net/${containerName}/`;
// const sharedKeyCredential = new StorageSharedKeyCredential(AccountName, AccountKey);
// const blobServiceClient = new BlobServiceClient(
//   `https://${AccountName}.blob.core.windows.net`,
//   sharedKeyCredential
// );
class FileUploadUtilities {
}
exports.FileUploadUtilities = FileUploadUtilities;
_a = FileUploadUtilities;
/**
 * create container in azure
 * @param name - unique value describing user
 * @returns success
 */
FileUploadUtilities.createContainer = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const containerName = name;
        // const containerClient = blobServiceClient.getContainerClient(containerName);
        // const createContainerResponse = await containerClient.create();
        // console.log(`Create container ${containerName} successfully`, createContainerResponse.requestId);
        return true;
    }
    catch (error) {
        console.log("azure error", error);
        return false;
    }
});
FileUploadUtilities.listContainer = () => __awaiter(void 0, void 0, void 0, function* () {
    let i = 1;
    // let iter = blobServiceClient.listContainers();
    // let containerItem = await iter.next();
    // while (!containerItem.done) {
    //   console.log(`Container ${i++}: ${containerItem.value.name}`);
    //   containerItem = await iter.next();
    // }
});
/**
 * Upload file to azure blob container
 * @param data
 */
FileUploadUtilities.uploadFileToAzure = (file, userId, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let blobName;
        // const containerClient = blobServiceClient.getContainerClient(`${containerName}`);
        const fileExt = path_1.default.extname(file.originalname);
        if (body.type === 'product') {
            blobName = `${userId}/product/${body.id}/${new Date().getTime()}${fileExt}`;
        }
        else {
            blobName = `${userId}/${new Date().getTime()}${fileExt}`;
        }
        // const blockBlobClient = containerClient.getBlockBlobClient(blobName);
        // const uploadBlobResponse = await blockBlobClient.uploadFile(file.path, { blobHTTPHeaders: { blobContentType: file.mimetype ? file.mimetype :'image/jpeg' } });
        // console.log(`Upload block blob ${blobName} successfully`, uploadBlobResponse.requestId);
        fs_1.default.unlinkSync(file.path);
        return `${blobName}`;
    }
    catch (error) {
        console.log("azure error", error);
        return '';
    }
});
FileUploadUtilities.listFiles = (containerName) => __awaiter(void 0, void 0, void 0, function* () {
    // const containerClient = blobServiceClient.getContainerClient(containerName);
    let i = 1;
    // let blobs = containerClient.listBlobsFlat();
    // for await (const blob of blobs) {
    //   console.log(`Blob ${i++}: ${blob.name}`);
    // }
});
FileUploadUtilities.deleteFile = (filename) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const containerClient = blobServiceClient.getContainerClient(containerName);
        // const blockBlobClient = containerClient.getBlockBlobClient(filename)
        // const blobDeleteResponse = await blockBlobClient.delete();
        return true;
    }
    catch (error) {
        console.log("azure error", error);
        return false;
    }
});
FileUploadUtilities.removeFile = (directoryPath) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        fs_1.default.unlink(directoryPath, (err) => {
            if (err) {
                return false;
            }
        });
        return true;
    }
    catch (error) {
        console.log('error');
        return false;
    }
});
FileUploadUtilities.moveFile = (currentPath, destinationPath) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        fs_1.default.rename(currentPath, destinationPath, function (err) {
            if (err) {
                console.log('error', err);
                return false;
            }
        });
        return true;
    }
    catch (error) {
        console.log('error', error);
        return false;
    }
});
//# sourceMappingURL=FileUploadUtilities.js.map