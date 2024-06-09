package org.zerock.mallapi.repository.search;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.zerock.mallapi.domain.QTodo;
import org.zerock.mallapi.domain.Todo;
import org.zerock.mallapi.dto.PageRequestDTO;

import com.querydsl.jpa.JPQLQuery;

import lombok.extern.log4j.Log4j2;

@Log4j2
public class TodoSearchImpl extends QuerydslRepositorySupport implements TodoSearch {

	public TodoSearchImpl() {
		super(Todo.class);
	}

	@Override
	public Page<Todo> search1(PageRequestDTO pageRequestDTO) {
		log.info("search1.....................................");

		QTodo todo = QTodo.todo; // 쿼리를 날리기위한 객체

		JPQLQuery<Todo> query = from(todo); // 쿼리를 만들어 낸다

		Pageable pageable = PageRequest.of(
				pageRequestDTO.getPage() - 1, 
				pageRequestDTO.getSize(),
				Sort.by("tno").descending());
		
		this.getQuerydsl().applyPagination(pageable, query);

		List<Todo> list = query.fetch(); // 목록 데이터 조회시 사용
		
		long total = query.fetchCount();

		return new PageImpl<>(list, pageable, total);
	}

}
