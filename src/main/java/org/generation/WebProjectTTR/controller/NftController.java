package org.generation.WebProjectTTR.controller;

import org.generation.WebProjectTTR.component.FileUploadUtil;
import org.generation.WebProjectTTR.repository.entity.Nft;
import org.generation.WebProjectTTR.service.NftService;
import org.generation.WebProjectTTR.controller.dto.NftDto;

import org.springframework.beans.factory.annotation.*;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/nft")
public class NftController {

    @Value("${nft.folder}")
    private String nftFolder;

    final NftService nftService;

    public NftController(@Autowired NftService nftService) {
        this.nftService = nftService;
    }

    @CrossOrigin
    @GetMapping("all")
    public Iterable<Nft> getNfts() {
        return nftService.all();
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public Nft findItemById(@PathVariable Integer idNft) {
        return nftService.findById(idNft);
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer idNft) {
        nftService.delete(idNft);
    }

    @CrossOrigin
    @PostMapping("/add")
    public void save( @RequestParam(name="title", required = true) String title,
                      @RequestParam(name="price", required = true) double price,
                      @RequestParam(name="imageUrl", required = true) String imageUrl,
                      @RequestParam(name="description", required = true) String description,
                      @RequestParam(name="category", required = true) String category,
                      // @RequestParam(name="like", required = true) int like,
                      @RequestParam("nftfile") MultipartFile multipartFile) throws IOException
    {
        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        FileUploadUtil.saveFile(nftFolder, fileName, multipartFile);

        String fullPath = nftFolder + "/" + imageUrl;
        NftDto nftDto = new NftDto(title, price, fullPath, description, category);
        nftService.save(new Nft(nftDto));
    }

}
