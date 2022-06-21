package org.generation.WebProjectTTR.service;

import org.generation.WebProjectTTR.repository.entity.Nft;
import org.springframework.data.domain.Page;

import java.util.List;
public interface NftService {
    List<Nft> all();

    Nft save (Nft nft);

    void delete(int idNft);

    Nft findById(int idNft);

    Page<Nft> getPagination(Integer pageNumber);

    // Long getNftCount();

    Page<Nft> findByCategory(String name, Integer pageNumber);

}
