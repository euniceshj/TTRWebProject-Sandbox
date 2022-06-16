package org.generation.WebProjectTTR.component;

import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.*;


public class FileUploadUtil {

    public static void saveFile(String uploadDir1, String fileName,
                                MultipartFile multipartFile) throws IOException
    {
        //productImages is the directory that we set up
        //Paths.get - convert a string to the directory path
        Path uploadPath1 = Paths.get(uploadDir1);

        //getInputStream method is from the Multipart Class package
        try (InputStream inputStream = multipartFile.getInputStream()) {

            Path filePath1 = uploadPath1.resolve(fileName);
            Files.copy(inputStream, filePath1, StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException ioe) {
            throw new IOException("Could not save image file: " + fileName, ioe);
        }
    }
}
