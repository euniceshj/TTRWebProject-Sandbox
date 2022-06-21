package org.generation.WebProjectTTR.repository;

import org.generation.WebProjectTTR.repository.entity.Nft;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface NftRepository extends JpaRepository<Nft, Long>
{
    @Query("SELECT c FROM Nft c WHERE c.category = :category")
    Page<Nft> findAllByCategory(@Param("category") String name, Pageable pageable);

}