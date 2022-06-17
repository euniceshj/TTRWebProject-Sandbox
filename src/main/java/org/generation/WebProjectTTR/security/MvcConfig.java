package org.generation.WebProjectTTR.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.*;

@Configuration
public class MvcConfig implements WebMvcConfigurer {

    @Value("${nft.folder}")
    private String nftfolder;

    public void addViewControllers(ViewControllerRegistry registry) {
        //Map the browser's URL to a specific View (HTML) inside resources/templates directory

        //We can register view that can create a direct mapping between the URL and the
        // view name (.html)
        registry.addViewController("/").setViewName("index");
        registry.addViewController("/index").setViewName("index");
        registry.addViewController("/aboutme").setViewName("aboutme");
        registry.addViewController("/products").setViewName("products");
        registry.addViewController("/loginPage").setViewName("loginPage");
        registry.addViewController("/listCollection").setViewName("listCollection");


    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {

        //expose the images, js, css resources to the client (Browser) so that they can
        // access the necessary files to display


        registry.addResourceHandler("/static")
                .addResourceLocations("classpath:/static/")
                .setCachePeriod(0);

        Path uploadDir = Paths.get(nftfolder);
        String uploadPath = uploadDir.toFile().getAbsolutePath();

        registry.addResourceHandler("/" + nftfolder + "/**")
                .addResourceLocations("file:" + uploadPath + "/")
                .setCachePeriod(0);

    }

}
