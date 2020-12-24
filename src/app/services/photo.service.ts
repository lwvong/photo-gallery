import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
  CameraPhoto, CameraSource } from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photos: Photo[] = []; // array of references to all photos captured

  constructor() { }

  // Open device camera
  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, 
      source: CameraSource.Camera, 
      quality: 100 
    });
    
    // Add newly captured photo to beginning of photos array
    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath})
  }
}

// Photo interface for holding photo metadata
export interface Photo {
  filepath: string;
  webviewPath: string;
}