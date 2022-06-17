package org.generation.WebProjectTTR.service;

import org.generation.WebProjectTTR.repository.entity.Nft;
import java.util.List;
public interface NftService {
    List<Nft> all();

    Nft save (Nft nft);

    void delete(int idNft);

    Nft findById(int idNft);

}
