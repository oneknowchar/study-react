package org.zerock.mallapi.repository.search;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.zerock.mallapi.domain.QTodo;
import org.zerock.mallapi.domain.Todo;

import com.querydsl.jpa.JPQLQuery;

import lombok.extern.log4j.Log4j2;

@Log4j2
public class TodoSearchImpl extends QuerydslRepositorySupport implements TodoSearch{

	public TodoSearchImpl() {
		super(Todo.class);
	}

	@Override
	public Page<Todo> search1() {
		log.info("search1.....................................");
		
		QTodo todo = QTodo.todo;	//쿼리를 날리기위한 객체
		 
		JPQLQuery<Todo> query = from(todo);	//쿼리를 만들어 낸다
		
		query.where(todo.title.contains("1"));
		
		Pageable pageable = PageRequest.of(1, 10, Sort.by("tno").descending());	//페이징 처리 조건
		this.getQuerydsl().applyPagination(pageable, query);
		
		query.fetch();	//목록 데이터 조회시 사용
		
		return null;
	}

}
